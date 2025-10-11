import {
	getDocument,
	GlobalWorkerOptions,
	type PDFDocumentProxy,
} from 'pdfjs-dist';
// @ts-ignore
import workerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url';

GlobalWorkerOptions.workerSrc = workerSrc as unknown as string;

export async function createPdfThumbnail(
	file: File,
	maxWidth = 160,
	maxHeight = 160
): Promise<string> {
	const arrayBuffer = await file.arrayBuffer();
	const pdf: PDFDocumentProxy = await getDocument({ data: arrayBuffer })
		.promise;
	const page = await pdf.getPage(1);
	const viewport = page.getViewport({ scale: 1 });
	const scale = Math.min(
		maxWidth / viewport.width,
		maxHeight / viewport.height
	);
	const scaled = page.getViewport({ scale });

	const canvas = document.createElement('canvas');
	canvas.width = Math.ceil(scaled.width);
	canvas.height = Math.ceil(scaled.height);
	const ctx = canvas.getContext('2d');
	if (!ctx) throw new Error('Canvas 2D context unavailable');

	await page.render({ canvasContext: ctx, viewport: scaled }).promise;

	const blob: Blob | null = await new Promise((resolve) =>
		canvas.toBlob((b) => resolve(b), 'image/png')
	);
	if (!blob) throw new Error('Failed to create thumbnail blob');
	return URL.createObjectURL(blob);
}
