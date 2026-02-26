import { useMemo, useState, type ChangeEvent, type DragEvent } from 'react';
import { Description, Button } from '@shared';
import * as S from './PdfSplitWidget.style';
import * as UploadStyles from '../FileUploadWidget/FileUploadWidget.style';
import { useTranslation } from 'react-i18next';
import {
	splitPdfByRanges,
	splitPdfByChunkSize,
	getPdfPageCount,
} from '../../lib/split';

type SplitMode = 'ranges' | 'chunk';

interface SplitResultPreview {
	name: string;
	from: number;
	to: number;
}

export function PdfSplitWidget() {
	const { t } = useTranslation();
	const [file, setFile] = useState<File | null>(null);
	const [pageCount, setPageCount] = useState<number | null>(null);
	const [mode, setMode] = useState<SplitMode>('ranges');
	const [rangeInput, setRangeInput] = useState('');
	const [chunkSize, setChunkSize] = useState(10);
	const [error, setError] = useState<string | null>(null);
	const [isSplitting, setIsSplitting] = useState(false);
	const [results, setResults] = useState<SplitResultPreview[]>([]);
	const [isOver, setIsOver] = useState(false);

	const applyFile = async (next: File) => {
		if (
			next.type !== 'application/pdf' &&
			!next.name.toLowerCase().endsWith('.pdf')
		) {
			setError(t('pdfTools.split.errors.onlyPdf'));
			setFile(null);
			setPageCount(null);
			return;
		}

		setError(null);
		setFile(next);
		setPageCount(null);

		try {
			const pages = await getPdfPageCount(next);
			setPageCount(pages);
		} catch {
			// 페이지 수를 가져오지 못하더라도 분할 자체는 가능하므로 치명적 에러로 취급하지 않음
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const next = e.target.files?.[0];
		if (!next) return;
		void applyFile(next);
		// 같은 파일 재선택 가능하도록 input 초기화
		e.target.value = '';
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsOver(false);
		const dropped = Array.from(e.dataTransfer.files || []);
		if (dropped.length === 0) return;
		const [first] = dropped;
		void applyFile(first);
	};

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsOver(true);
	};

	const handleDragLeave = () => {
		setIsOver(false);
	};

	const parsedRanges = useMemo(() => {
		if (!pageCount) return [];
		if (!rangeInput.trim()) return [];

		const parts = rangeInput
			.split(',')
			.map((p) => p.trim())
			.filter(Boolean);

		const ranges: { from: number; to: number }[] = [];
		for (const part of parts) {
			const [startStr, endStr] = part.split('-').map((v) => v.trim());
			const start = Number(startStr);
			const end = endStr ? Number(endStr) : start;

			if (!Number.isInteger(start) || !Number.isInteger(end)) {
				return null;
			}
			if (start < 1 || end < 1 || start > end) {
				return null;
			}
			if (start > pageCount) {
				return null;
			}
			ranges.push({
				from: start,
				to: Math.min(end, pageCount),
			});
		}
		return ranges;
	}, [rangeInput, pageCount]);

	const chunkPreview = useMemo(() => {
		if (!pageCount || chunkSize <= 0) return [];

		const ranges: { from: number; to: number }[] = [];
		let current = 1;
		let index = 1;

		while (current <= pageCount) {
			const from = current;
			const to = Math.min(current + chunkSize - 1, pageCount);
			ranges.push({ from, to });
			current = to + 1;
			index += 1;
		}
		return ranges;
	}, [pageCount, chunkSize]);

	const previewRanges = useMemo<SplitResultPreview[]>(() => {
		if (!pageCount) return [];

		if (mode === 'ranges') {
			if (!parsedRanges || parsedRanges.length === 0) return [];
			return parsedRanges.map((r, idx) => ({
				name: `part${String(idx + 1).padStart(2, '0')}.pdf`,
				from: r.from,
				to: r.to,
			}));
		}

		return chunkPreview.map((r, idx) => ({
			name: `part${String(idx + 1).padStart(2, '0')}.pdf`,
			from: r.from,
			to: r.to,
		}));
	}, [mode, pageCount, parsedRanges, chunkPreview]);

	const handleSplit = async () => {
		if (!file) {
			setError(t('pdfTools.split.errors.noFile'));
			return;
		}

		setError(null);
		setIsSplitting(true);
		try {
			if (mode === 'ranges') {
				if (!parsedRanges || parsedRanges.length === 0) {
					setError(t('pdfTools.split.errors.invalidRanges'));
					return;
				}
				await splitPdfByRanges(file, parsedRanges);
			} else {
				if (!pageCount || chunkSize <= 0) {
					setError(t('pdfTools.split.errors.invalidChunkSize'));
					return;
				}
				await splitPdfByChunkSize(file, chunkSize, pageCount);
			}
			setResults(previewRanges);
		} catch (e) {
			console.error(e);
			setError(t('pdfTools.split.errors.generic'));
		} finally {
			setIsSplitting(false);
		}
	};

	return (
		<S.Wrapper>
			<Description>
				<Description.Title>{t('pdfTools.split.title')}</Description.Title>
				<Description.Contents>
					{t('pdfTools.split.description')}
				</Description.Contents>
			</Description>

			<S.Layout>
				<S.LeftColumn>
					<S.SectionTitle>{t('pdfTools.split.sections.upload')}</S.SectionTitle>
					<S.OptionsCard>
						<S.FieldRow>
							<S.FieldLabel htmlFor="pdfSplitInput">
								{t('pdfTools.split.fields.fileLabel')}
							</S.FieldLabel>
							<UploadStyles.DropArea
								isOver={isOver}
								onDrop={handleDrop}
								onDragOver={handleDragOver}
								onDragLeave={handleDragLeave}
							>
								<div style={{ textAlign: 'center' }}>
									{t('pdfTools.dropMessage')}
								</div>
								<UploadStyles.Row>
									<input
										id="pdfSplitInput"
										type="file"
										accept="application/pdf,.pdf"
										onChange={handleFileChange}
										style={{ display: 'none' }}
									/>
									<Button
										variant="monoOutline"
										display_value={t('pdfTools.selectFilesButton')}
										onClick={() =>
											document
												.getElementById('pdfSplitInput')
												?.click()
										}
									/>
								</UploadStyles.Row>
							</UploadStyles.DropArea>
							{file && (
								<S.FieldHelp>
									{t('pdfTools.split.fields.selectedFile', {
										name: file.name,
									})}
								</S.FieldHelp>
							)}
						</S.FieldRow>

						{pageCount && (
							<S.FieldHelp>
								{t('pdfTools.split.fields.pageCount', {
									count: pageCount,
								})}
							</S.FieldHelp>
						)}
					</S.OptionsCard>

					<S.SectionTitle>{t('pdfTools.split.sections.options')}</S.SectionTitle>
					<S.OptionsCard>
						<S.FieldRow>
							<S.FieldLabel>{t('pdfTools.split.fields.modeLabel')}</S.FieldLabel>
							<S.RadioRow>
								<S.RadioLabel>
									<input
										type="radio"
										name="splitMode"
										value="ranges"
										checked={mode === 'ranges'}
										onChange={() => setMode('ranges')}
									/>
									{t('pdfTools.split.modes.ranges')}
								</S.RadioLabel>
								<S.RadioLabel>
									<input
										type="radio"
										name="splitMode"
										value="chunk"
										checked={mode === 'chunk'}
										onChange={() => setMode('chunk')}
									/>
									{t('pdfTools.split.modes.chunk')}
								</S.RadioLabel>
							</S.RadioRow>
						</S.FieldRow>

						{mode === 'ranges' && (
							<S.FieldRow>
								<S.FieldLabel htmlFor="splitRanges">
									{t('pdfTools.split.fields.rangeLabel')}
								</S.FieldLabel>
								<S.TextInput
									id="splitRanges"
									value={rangeInput}
									onChange={(e) => setRangeInput(e.target.value)}
									placeholder={t('pdfTools.split.fields.rangePlaceholder')}
								/>
								<S.FieldHelp>
									{t('pdfTools.split.fields.rangeHelp')}
								</S.FieldHelp>
								{parsedRanges === null && (
									<S.ErrorText>
										{t('pdfTools.split.errors.invalidRanges')}
									</S.ErrorText>
								)}
							</S.FieldRow>
						)}

						{mode === 'chunk' && (
							<S.FieldRow>
								<S.FieldLabel htmlFor="splitChunk">
									{t('pdfTools.split.fields.chunkLabel')}
								</S.FieldLabel>
								<S.NumberInput
									id="splitChunk"
									type="number"
									min={1}
									value={chunkSize}
									onChange={(e) =>
										setChunkSize(
											Number.isNaN(Number(e.target.value))
												? 1
												: Number(e.target.value),
										)
									}
								/>
								<S.FieldHelp>
									{t('pdfTools.split.fields.chunkHelp')}
								</S.FieldHelp>
							</S.FieldRow>
						)}

						{error && <S.ErrorText>{error}</S.ErrorText>}
					</S.OptionsCard>
				</S.LeftColumn>

				<S.RightColumn>
					<S.SectionTitle>{t('pdfTools.split.sections.preview')}</S.SectionTitle>
					<S.OptionsCard>
						{previewRanges.length === 0 ? (
							<S.FieldHelp>
								{t('pdfTools.split.preview.empty')}
							</S.FieldHelp>
						) : (
							<S.ResultList>
								{previewRanges.map((item, idx) => (
									<S.ResultItem key={`${item.name}-${idx}`}>
										<S.ResultName>{item.name}</S.ResultName>
										<S.ResultPages>
											{t('pdfTools.split.preview.pages', {
												from: item.from,
												to: item.to,
											})}
										</S.ResultPages>
									</S.ResultItem>
								))}
							</S.ResultList>
						)}
					</S.OptionsCard>

					<S.ActionsRow>
						<Button
							variant="mono"
							display_value={
								isSplitting
									? t('pdfTools.split.buttons.splitting')
									: t('pdfTools.split.buttons.split')
							}
							onClick={handleSplit}
							disabled={!file || isSplitting}
						/>
					</S.ActionsRow>
				</S.RightColumn>
			</S.Layout>
		</S.Wrapper>
	);
}

