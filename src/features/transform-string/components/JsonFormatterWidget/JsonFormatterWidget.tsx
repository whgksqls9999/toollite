import { useMemo, useState } from 'react';
import * as S from './JsonFormatterWidget.style';
import {
	Description,
	RadioGroup,
	RadioGroupProps,
	TextToText,
	ButtonProps,
	CopyIcon,
	ResetIcon,
	useToastContext,
} from '@shared';
import { useTranslation } from 'react-i18next';

type Mode = 'parse' | 'stringify';

interface JsonResult {
	value: string;
	error: string | null;
}

const SORT_KEYS_MAX_DEPTH = 100;
const DEFAULT_INDENT = 2;

function sortKeysDeep(value: unknown, depth = 0): unknown {
	if (depth > SORT_KEYS_MAX_DEPTH) {
		return value;
	}
	if (Array.isArray(value)) {
		return value.map((item) => sortKeysDeep(item, depth + 1));
	}
	if (value !== null && typeof value === 'object') {
		try {
			const entries = Object.entries(
				value as Record<string, unknown>
			).sort(([a], [b]) => a.localeCompare(b));
			const result: Record<string, unknown> = {};
			for (const [k, v] of entries) {
				result[k] = sortKeysDeep(v, depth + 1);
			}
			return result;
		} catch {
			return value;
		}
	}
	return value;
}

function formatJson(input: unknown, mode: Mode, sortKeys: boolean): JsonResult {
	const str = typeof input === 'string' ? input : String(input ?? '');
	if (!str.trim()) {
		return { value: '', error: null };
	}

	function safeStringify(value: unknown): string {
		try {
			return JSON.stringify(value, null, DEFAULT_INDENT);
		} catch (e) {
			if (e instanceof Error) throw e;
			throw new Error('Result could not be converted to string.');
		}
	}

	try {
		if (mode === 'parse') {
			const parsed = JSON.parse(str);
			const target = sortKeys ? sortKeysDeep(parsed) : parsed;

			if (
				parsed === null ||
				typeof parsed === 'object' ||
				Array.isArray(parsed)
			) {
				return { value: safeStringify(target), error: null };
			}

			return { value: String(parsed), error: null };
		}

		// stringify 모드
		const target = sortKeys ? sortKeysDeep(str) : str;
		return { value: safeStringify(target), error: null };
	} catch (e) {
		if (e instanceof Error) {
			return {
				value: '',
				error: e.message,
			};
		}
		return {
			value: '',
			error: 'UNKNOWN_ERROR',
		};
	}
}

export function JsonFormatterWidget() {
	const [mode, setMode] = useState<Mode>('parse');
	const [sortKeys, setSortKeys] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const { showToast } = useToastContext();
	const { t } = useTranslation();

	const { value: rawOutputValue, error } = useMemo(
		() => formatJson(inputValue, mode, sortKeys),
		[inputValue, mode, sortKeys]
	);

	const hasUnknownError = error === 'UNKNOWN_ERROR';
	const displayValue = error
		? hasUnknownError
			? t('jsonFormatter.errors.unknown')
			: t('jsonFormatter.errors.invalidJson', { message: error })
		: rawOutputValue;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(displayValue);
			showToast(t('common.toast.jsonCopySuccess'), 'success');
		} catch {
			showToast(t('common.toast.copyError'), 'error');
		}
	};

	const toolbar: ButtonProps[] = [
		{
			display_value: t('common.buttons.reset'),
			onClick: () => setInputValue(''),
			variant: 'monoOutline',
			Icon: <ResetIcon size={16} />,
		},
		{
			display_value: t('common.buttons.copy'),
			onClick: handleCopy,
			variant: 'mono',
			Icon: <CopyIcon size={16} />,
		},
	];

	const modeOptions: RadioGroupProps = {
		name: 'json_mode',
		value: mode,
		onChange: (v) => setMode(v as Mode),
		direction: 'row',
		gap: 8,
		wrap: true,
		variant: 'naked',
		options: [
			{
				value: 'parse',
				label: t('jsonFormatter.modeParse'),
				type: 'checkbox',
				checkboxLabel: t('jsonFormatter.modeParseSortCheckbox'),
				checkboxChecked: sortKeys,
				onCheckboxChange: setSortKeys,
				checkboxId: 'json_sort_keys',
			},
			{
				value: 'stringify',
				label: t('jsonFormatter.modeStringify'),
			},
		],
	};

	return (
		<S.Wrapper>
			<Description>
				<Description.Title>{t('jsonFormatter.title')}</Description.Title>
				<Description.Contents>
					{t('jsonFormatter.description')}
				</Description.Contents>
			</Description>

			<S.OptionsPanel>
				<S.OptionsRow>
					<S.OptionsGroup>
						<S.OptionLabel>{t('jsonFormatter.modeLabel')}</S.OptionLabel>
						<RadioGroup {...modeOptions} />
					</S.OptionsGroup>
				</S.OptionsRow>
			</S.OptionsPanel>

			<S.TextAreaSection>
				<TextToText
					value={inputValue}
					onChange={setInputValue}
					outputValue={displayValue}
					toolbar={toolbar}
					inputProps={{
						placeholder: t('jsonFormatter.inputPlaceholder'),
					}}
					outputProps={{
						readOnly: true,
						placeholder: error
							? undefined
							: t('jsonFormatter.outputPlaceholder'),
						...(error && { style: { color: '#EF4444' } }),
					}}
				/>
			</S.TextAreaSection>
		</S.Wrapper>
	);
}
