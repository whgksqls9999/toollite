import { useCallback, useState } from 'react';
import { dedupeFiles } from '../lib/fileKey';

export interface UseFileListReturn {
	files: File[];
	addFiles: (newFiles: File[]) => void;
	removeAt: (index: number) => void;
	moveFile: (fromIndex: number, toIndex: number) => void;
	clearFiles: () => void;
}

/**
 * 파일 리스트 관리를 위한 훅
 * 파일 추가, 삭제, 정렬, 중복 제거 기능을 제공합니다.
 */
export function useFileList(): UseFileListReturn {
	const [files, setFiles] = useState<File[]>([]);

	const addFiles = useCallback((newFiles: File[]) => {
		setFiles((prev) => {
			const combined = [...prev, ...newFiles];
			return dedupeFiles(combined);
		});
	}, []);

	const removeAt = useCallback((index: number) => {
		setFiles((prev) => prev.filter((_, i) => i !== index));
	}, []);

	const moveFile = useCallback((fromIndex: number, toIndex: number) => {
		setFiles((prev) => {
			const newFiles = [...prev];
			const [movedFile] = newFiles.splice(fromIndex, 1);
			newFiles.splice(toIndex, 0, movedFile);
			return newFiles;
		});
	}, []);

	const clearFiles = useCallback(() => {
		setFiles([]);
	}, []);

	return {
		files,
		addFiles,
		removeAt,
		moveFile,
		clearFiles,
	};
}
