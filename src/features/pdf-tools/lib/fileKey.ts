/**
 * 파일의 고유 키를 생성합니다.
 * 파일명, 크기, 수정일시를 조합하여 중복을 방지합니다.
 */
export function getFileKey(file: File): string {
	return `${file.name}-${file.size}-${file.lastModified}`;
}

/**
 * 파일 배열에서 중복을 제거합니다.
 * getFileKey를 기준으로 중복 파일을 필터링합니다.
 */
export function dedupeFiles(files: File[]): File[] {
	const seen = new Set<string>();
	const result: File[] = [];

	for (const file of files) {
		const key = getFileKey(file);
		if (!seen.has(key)) {
			seen.add(key);
			result.push(file);
		}
	}

	return result;
}
