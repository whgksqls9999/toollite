import { useCallback, useState } from 'react';
import { Button, Input, Description } from '@shared';
import * as S from './FileUploadWidget.style';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();
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
				<Description.Title>{t('pdfTools.title')}</Description.Title>
				<Description.Contents>
					{t('pdfTools.description')}
				</Description.Contents>
			</Description>
			<S.DropArea
				isOver={isOver}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
			>
				<div style={{ textAlign: 'center' }}>
					{t('pdfTools.dropMessage')}
				</div>
				<S.Row>
					<Input
						id='pdfInput'
						type='file'
						multiple
						accept='.pdf,image/*'
						onChange={onFileChange}
						style={{ display: 'none' }}
					/>
					<Button
						variant='monoOutline'
						display_value={t('pdfTools.selectFilesButton')}
						onClick={() =>
							document.getElementById('pdfInput')?.click()
						}
					/>
					<Button
						variant='mono'
						display_value={
							isMerging
								? t('pdfTools.buttonMerging')
								: t('pdfTools.buttonMerge')
						}
						onClick={onMerge}
						disabled={fileCount < 2 || isMerging}
					/>
				</S.Row>
			</S.DropArea>
		</S.Wrapper>
	);
}
