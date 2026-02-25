import { Button } from '@shared';
import * as S from './FilePreviewWidget.style';
import { useDragSort } from '../../hooks/useDragSort';
import { usePreviews } from '../../hooks/usePreviews';
import { isPdfFile } from '../../lib/mime';
import { getFileKey } from '../../lib/fileKey';

interface FilePreviewWidgetProps {
	files: File[];
	onRemoveFile: (index: number) => void;
	onMoveFile: (fromIndex: number, toIndex: number) => void;
}

export function FilePreviewWidget({
	files,
	onRemoveFile,
	onMoveFile,
}: FilePreviewWidgetProps) {
	// 드래그 정렬
	const { onDragStart, onDragEnter } = useDragSort(onMoveFile);

	// 프리뷰 관리
	const { getPreviewUrl } = usePreviews(files);

	if (files.length === 0) {
		return null;
	}

	return (
		<S.Wrapper>
			<S.FileSummary>첨부된 파일 ({files.length}개)</S.FileSummary>
			<S.FileList>
				{files.map((file, idx) => {
					const key = getFileKey(file);
					const previewUrl = getPreviewUrl(file);
					return (
						<S.FileItem
							key={key}
							draggable
							onDragStart={onDragStart(idx)}
							onDragEnter={onDragEnter(idx)}
							title={file.name}
						>
							<S.DragHandle>::</S.DragHandle>
							<S.Thumb>
								{previewUrl ? (
									<S.ThumbImage
										src={previewUrl}
										alt={file.name}
									/>
								) : (
									<S.ThumbPdf>
										{isPdfFile(file) ? 'PDF' : 'IMG'}
									</S.ThumbPdf>
								)}
							</S.Thumb>
							<S.FileName>{file.name}</S.FileName>
							<Button
								variant='monoOutline'
								display_value='삭제'
								onClick={() => onRemoveFile(idx)}
							/>
						</S.FileItem>
					);
				})}
			</S.FileList>
		</S.Wrapper>
	);
}
