import { PDFDocument } from 'pdf-lib';
import { isPdfFile, isSupportedImageFile, detectMimeFromFile } from './mime';

/**
 * 여러 파일을 하나의 PDF로 병합합니다.
 * PDF 파일은 페이지를 복사하고, 이미지 파일은 새 페이지로 추가합니다.
 */
export async function mergeFilesToPdf(files: File[]): Promise<Blob> {
	if (files.length === 0) {
		throw new Error('병합할 파일이 없습니다.');
	}

	const mergedPdf = await PDFDocument.create();

	for (const file of files) {
		const arrayBuffer = await file.arrayBuffer();

		if (isPdfFile(file)) {
			// PDF 파일 처리
			const sourcePdf = await PDFDocument.load(arrayBuffer);
			const pageIndices = sourcePdf.getPageIndices();
			const copiedPages = await mergedPdf.copyPages(
				sourcePdf,
				pageIndices
			);

			copiedPages.forEach((page) => mergedPdf.addPage(page));
		} else if (isSupportedImageFile(file)) {
			// 이미지 파일 처리
			const mimeType = detectMimeFromFile(file);
			let imageRef;

			if (mimeType === 'image/png') {
				imageRef = await mergedPdf.embedPng(arrayBuffer);
			} else {
				imageRef = await mergedPdf.embedJpg(arrayBuffer);
			}

			const { width, height } = imageRef;
			const page = mergedPdf.addPage([width, height]);
			page.drawImage(imageRef, {
				x: 0,
				y: 0,
				width,
				height,
			});
		} else {
			console.warn(`지원하지 않는 파일 형식: ${file.name}`);
		}
	}

	const pdfBytes = await mergedPdf.save();
	return new Blob([pdfBytes as any], { type: 'application/pdf' });
}

/**
 * PDF 파일을 다운로드합니다.
 */
export function downloadPdf(blob: Blob, fileName: string = 'merged.pdf'): void {
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
