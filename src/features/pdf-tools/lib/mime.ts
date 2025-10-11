/**
 * 파일의 MIME 타입을 판별합니다.
 * 브라우저의 file.type과 파일 확장자를 모두 확인합니다.
 */
export function detectMimeFromFile(file: File): string {
	// 브라우저가 제공하는 MIME 타입이 있으면 우선 사용
	if (file.type && file.type !== '') {
		return file.type;
	}

	// 확장자 기반 MIME 타입 추정
	const extension = file.name.toLowerCase().split('.').pop() || '';

	switch (extension) {
		case 'pdf':
			return 'application/pdf';
		case 'png':
			return 'image/png';
		case 'jpg':
		case 'jpeg':
			return 'image/jpeg';
		case 'gif':
			return 'image/gif';
		case 'webp':
			return 'image/webp';
		default:
			return 'application/octet-stream';
	}
}

/**
 * 파일이 PDF인지 확인합니다.
 */
export function isPdfFile(file: File): boolean {
	const mime = detectMimeFromFile(file);
	return mime === 'application/pdf';
}

/**
 * 파일이 이미지인지 확인합니다.
 */
export function isImageFile(file: File): boolean {
	const mime = detectMimeFromFile(file);
	return mime.startsWith('image/');
}

/**
 * PDF 병합에서 지원하는 이미지 타입인지 확인합니다.
 */
export function isSupportedImageFile(file: File): boolean {
	const mime = detectMimeFromFile(file);
	return ['image/png', 'image/jpeg', 'image/jpg'].includes(mime);
}
