import { useCallback, useRef } from 'react';

export interface UseDragSortReturn {
	onDragStart: (index: number) => () => void;
	onDragEnter: (index: number) => () => void;
}

/**
 * 드래그 앤 드롭 정렬을 위한 훅
 * 파일 리스트의 순서를 변경할 수 있습니다.
 */
export function useDragSort(
	onMove: (fromIndex: number, toIndex: number) => void
): UseDragSortReturn {
	const dragIndexRef = useRef<number | null>(null);

	const onDragStart = useCallback((index: number) => {
		return () => {
			dragIndexRef.current = index;
		};
	}, []);

	const onDragEnter = useCallback(
		(index: number) => {
			return () => {
				const fromIndex = dragIndexRef.current;
				if (fromIndex === null || fromIndex === index) return;
				onMove(fromIndex, index);
				dragIndexRef.current = index;
			};
		},
		[onMove]
	);

	return {
		onDragStart,
		onDragEnter,
	};
}
