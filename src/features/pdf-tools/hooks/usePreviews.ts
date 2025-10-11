import { useCallback, useEffect, useState } from 'react';
import { getFileKey } from '../lib/fileKey';
import { isImageFile } from '../lib/mime';
import { createPdfThumbnail } from '../lib/pdfThumbnails';

export interface UsePreviewsOptions {
	thumbnailSize?: { width: number; height: number };
}

export interface UsePreviewsReturn {
	previews: Record<string, string>;
	getPreviewUrl: (file: File) => string | undefined;
}

/**
 * 파일 프리뷰 관리를 위한 훅
 * 이미지는 Object URL을, PDF는 썸네일을 생성합니다.
 */
export function usePreviews(
	files: File[],
	options: UsePreviewsOptions = {}
): UsePreviewsReturn {
	const { thumbnailSize = { width: 148, height: 120 } } = options;
	const [previews, setPreviews] = useState<Record<string, string>>({});

	const getPreviewUrl = useCallback(
		(file: File) => {
			const key = getFileKey(file);
			return previews[key];
		},
		[previews]
	);

	useEffect(() => {
		let isActive = true;
		const currentKeys = new Set(files.map(getFileKey));
		const newPreviews: Record<string, string> = {};

		// 기존 프리뷰 중 유지할 것들 보존
		setPreviews((prev) => {
			for (const [key, url] of Object.entries(prev)) {
				if (currentKeys.has(key)) {
					newPreviews[key] = url;
				} else {
					// 제거된 파일의 URL 해제
					URL.revokeObjectURL(url);
				}
			}
			return prev;
		});

		// 새 파일들의 프리뷰 생성
		const createPreviews = async () => {
			const tasks = files.map(async (file) => {
				const key = getFileKey(file);
				if (newPreviews[key] || !isActive) return;

				try {
					if (isImageFile(file)) {
						newPreviews[key] = URL.createObjectURL(file);
					} else {
						newPreviews[key] = await createPdfThumbnail(
							file,
							thumbnailSize.width,
							thumbnailSize.height
						);
					}
				} catch (error) {
					console.warn(
						`Failed to create preview for ${file.name}:`,
						error
					);
				}
			});

			await Promise.allSettled(tasks);

			if (!isActive) return;

			setPreviews((prev) => {
				const merged = { ...prev, ...newPreviews };
				// 현재 파일 목록에 없는 프리뷰 제거
				for (const key of Object.keys(merged)) {
					if (!currentKeys.has(key)) {
						delete merged[key];
					}
				}
				return merged;
			});
		};

		createPreviews();

		return () => {
			isActive = false;
		};
	}, [files, thumbnailSize.width, thumbnailSize.height]);

	// 컴포넌트 언마운트 시 모든 URL 해제
	useEffect(() => {
		return () => {
			Object.values(previews).forEach(URL.revokeObjectURL);
		};
	}, []);

	return {
		previews,
		getPreviewUrl,
	};
}
