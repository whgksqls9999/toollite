import { PDFDocument } from 'pdf-lib';
import { downloadPdf } from './merge';

export interface PageRange {
	from: number;
	to: number;
}

export async function getPdfPageCount(file: File): Promise<number> {
	const arrayBuffer = await file.arrayBuffer();
	const pdf = await PDFDocument.load(arrayBuffer);
	return pdf.getPageCount();
}

export async function splitPdfByRanges(
	file: File,
	ranges: PageRange[],
): Promise<void> {
	const arrayBuffer = await file.arrayBuffer();
	const sourcePdf = await PDFDocument.load(arrayBuffer);
	const totalPages = sourcePdf.getPageCount();

	for (let i = 0; i < ranges.length; i += 1) {
		const { from, to } = ranges[i];
		const start = Math.max(1, from);
		const end = Math.min(to, totalPages);

		if (start > end) continue;

		const indices = [];
		for (let p = start; p <= end; p += 1) {
			indices.push(p - 1); // 0-based index
		}

		const outPdf = await PDFDocument.create();
		const copiedPages = await outPdf.copyPages(sourcePdf, indices);
		for (const page of copiedPages) {
			outPdf.addPage(page);
		}

		const pdfBytes = await outPdf.save();
		const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
		const baseName = file.name.replace(/\.pdf$/i, '');
		const fileName = `${baseName}_p${start}-${end}.pdf`;
		downloadPdf(blob, fileName);
	}
}

export async function splitPdfByChunkSize(
	file: File,
	chunkSize: number,
	totalPages?: number,
): Promise<void> {
	const arrayBuffer = await file.arrayBuffer();
	const sourcePdf = await PDFDocument.load(arrayBuffer);
	const pageCount = totalPages ?? sourcePdf.getPageCount();

	let current = 1;
	let index = 1;

	while (current <= pageCount) {
		const from = current;
		const to = Math.min(current + chunkSize - 1, pageCount);

		const indices = [];
		for (let p = from; p <= to; p += 1) {
			indices.push(p - 1);
		}

		const outPdf = await PDFDocument.create();
		const copiedPages = await outPdf.copyPages(sourcePdf, indices);
		for (const page of copiedPages) {
			outPdf.addPage(page);
		}

		const pdfBytes = await outPdf.save();
		const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
		const baseName = file.name.replace(/\.pdf$/i, '');
		const suffix = String(index).padStart(2, '0');
		const fileName = `${baseName}_part${suffix}.pdf`;
		downloadPdf(blob, fileName);

		current = to + 1;
		index += 1;
	}
}

