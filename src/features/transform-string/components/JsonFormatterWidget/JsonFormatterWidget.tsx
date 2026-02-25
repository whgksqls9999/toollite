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
			throw new Error('결과를 문자열로 변환할 수 없습니다.');
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
				error: `유효한 JSON 형식이 아닙니다.\n(${e.message})`,
			};
		}
		return {
			value: '',
			error: '알 수 없는 오류가 발생했습니다.',
		};
	}
}

export function JsonFormatterWidget() {
	const [mode, setMode] = useState<Mode>('parse');
	const [sortKeys, setSortKeys] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const { showToast } = useToastContext();

	const { value: outputValue, error } = useMemo(
		() => formatJson(inputValue, mode, sortKeys),
		[inputValue, mode, sortKeys]
	);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(outputValue);
			showToast('결과가 클립보드에 복사되었습니다.', 'success');
		} catch {
			showToast('복사에 실패했습니다.', 'error');
		}
	};

	const toolbar: ButtonProps[] = [
		{
			display_value: '초기화',
			onClick: () => setInputValue(''),
			variant: 'monoOutline',
			Icon: <ResetIcon size={16} />,
		},
		{
			display_value: '복사하기',
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
				label: 'JSON.parse (문자열 → 값)',
				type: 'checkbox',
				checkboxLabel: '키 알파벳 순 정렬',
				checkboxChecked: sortKeys,
				onCheckboxChange: setSortKeys,
				checkboxId: 'json_sort_keys',
			},
			{
				value: 'stringify',
				label: 'JSON.stringify (값/텍스트 → JSON 문자열)',
			},
		],
	};

	return (
		<S.Wrapper>
			<Description>
				<Description.Title>JSON 포맷터</Description.Title>
				<Description.Contents>
					JSON 문자열을 포맷하거나, 일반 텍스트를 JSON 문자열로 감쌀
					수 있습니다.
				</Description.Contents>
			</Description>

			<S.OptionsPanel>
				<S.OptionsRow>
					<S.OptionsGroup>
						<S.OptionLabel>모드</S.OptionLabel>
						<RadioGroup {...modeOptions} />
					</S.OptionsGroup>
				</S.OptionsRow>
			</S.OptionsPanel>

			<S.TextAreaSection>
				<TextToText
					value={inputValue}
					onChange={setInputValue}
					outputValue={error ?? outputValue}
					toolbar={toolbar}
					inputProps={{
						placeholder:
							'{"name":"Toollite","version":1} 처럼 JSON 문자열 또는 일반 텍스트를 입력하세요.',
					}}
					outputProps={{
						readOnly: true,
						placeholder: error
							? undefined
							: '포맷된 JSON 결과가 여기에 표시됩니다.',
						...(error && { style: { color: '#EF4444' } }),
					}}
				/>
			</S.TextAreaSection>
		</S.Wrapper>
	);
}
