import { useCallback, useState } from 'react';
import { FileUploadWidget } from '../FileUploadWidget';
import { useFileList } from '../../hooks/useFileList';
import { mergeFilesToPdf, downloadPdf } from '../../lib/merge';
import * as S from './PdfMergeWidget.style';
import { FilePreviewWidget } from '../FilePreviewWidget';

export function PdfMergeWidget() {
	const [isMerging, setIsMerging] = useState(false);

	// 파일 리스트 관리
	const { files, addFiles, removeAt, moveFile } = useFileList();

	const mergeAndDownload = useCallback(async () => {
		if (files.length < 2 || isMerging) return;
		setIsMerging(true);
		try {
			const blob = await mergeFilesToPdf(files);
			downloadPdf(blob);
		} catch (error) {
			console.error('PDF 병합 실패:', error);
			// TODO: Toast로 에러 메시지 표시
		} finally {
			setIsMerging(false);
		}
	}, [files, isMerging]);

	return (
		<S.Wrapper>
			<FileUploadWidget
				onFilesAdded={addFiles}
				onMerge={mergeAndDownload}
				isMerging={isMerging}
				fileCount={files.length}
			/>
			<FilePreviewWidget
				files={files}
				onRemoveFile={removeAt}
				onMoveFile={moveFile}
			/>
		</S.Wrapper>
	);
}
