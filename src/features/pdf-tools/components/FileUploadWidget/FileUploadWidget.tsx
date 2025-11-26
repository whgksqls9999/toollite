import { useCallback, useState } from 'react';
import { Button, Input, Description } from '@shared';
import * as S from './FileUploadWidget.style';

interface FileUploadWidgetProps {
	onFilesAdded: (files: File[]) => void;
	onMerge: () => void;
	isMerging: boolean;
	fileCount: number;
}

export function FileUploadWidget({
	onFilesAdded,
	onMerge,
	isMerging,
	fileCount,
}: FileUploadWidgetProps) {
	const [isOver, setIsOver] = useState(false);

	const onFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const next = Array.from(e.target.files || []);
			onFilesAdded(next);
			// 같은 파일 재선택 가능하도록 input 초기화
			e.target.value = '';
		},
		[onFilesAdded]
	);

	const onDrop = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			setIsOver(false);
			const dropped = Array.from(e.dataTransfer.files || []);
			if (dropped.length === 0) return;
			onFilesAdded(dropped);
		},
		[onFilesAdded]
	);

	const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsOver(true);
	}, []);

	const onDragLeave = useCallback(() => setIsOver(false), []);

	return (
		<S.Wrapper>
			<Description>
				<Description.Title>PDF 병합</Description.Title>
				<Description.Contents>
					여러 개의 PDF 또는 이미지(PNG/JPG)를 하나의 PDF로
					병합합니다.
				</Description.Contents>
			</Description>
			<S.DropArea
				isOver={isOver}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
			>
				<div style={{ textAlign: 'center' }}>
					PDF 파일을 드래그하여 놓거나 클릭하여 선택하세요
				</div>
				<S.Row>
					<Input
						id='pdfInput'
						type='file'
						multiple
						accept='.pdf,image/*'
						onChange={onFileChange}
					/>
					<Button
						variant='monoOutline'
						display_value={isMerging ? '병합 중...' : 'PDF 병합'}
						onClick={onMerge}
						disabled={fileCount < 2 || isMerging}
					/>
				</S.Row>
			</S.DropArea>
		</S.Wrapper>
	);
}
