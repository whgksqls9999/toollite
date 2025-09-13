import { useMemo, useState } from 'react';
import * as S from './CaseConvertWidget.style';
import { InputWidget } from './InputWidget';
import { ResultCardWidget } from './ResultCardWidget';

function toTitleCase(input: string): string {
	return input
		.toLowerCase()
		.replace(/(^|\s|_|-)+(\w)/g, (_m, _sep, c: string) => c.toUpperCase())
		.replace(/[\s_-]+/g, ' ');
}

function toCamelCase(input: string): string {
	const words = input.replace(/[_-]+/g, ' ').trim().split(/\s+/);
	if (words.length === 0) return '';
	const [first, ...rest] = words.map((w) => w.toLowerCase());
	return (
		first + rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('')
	);
}

function toSnakeCase(input: string): string {
	return input
		.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
		.replace(/[-\s]+/g, '_')
		.toLowerCase();
}

function toKebabCase(input: string): string {
	return input
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/[ _]+/g, '-')
		.toLowerCase();
}

export function CaseConvertWidget() {
	const [inputValue, setInputValue] = useState<string>('');

	const items = useMemo(
		() => [
			{
				title: '소문자',
				sample: 'hello world',
				result: inputValue.toLowerCase(),
			},
			{
				title: '대문자',
				sample: 'HELLO WORLD',
				result: inputValue.toUpperCase(),
			},
			{
				title: '제목 케이스',
				sample: 'Hello World',
				result: toTitleCase(inputValue),
			},
			{
				title: '카멜 케이스',
				sample: 'helloWorld',
				result: toCamelCase(inputValue),
			},
			{
				title: '스네이크 케이스',
				sample: 'hello_world',
				result: toSnakeCase(inputValue),
			},
			{
				title: '케밥 케이스',
				sample: 'hello-world',
				result: toKebabCase(inputValue),
			},
		],
		[inputValue]
	);

	return (
		<S.Wrapper>
			<S.Description>대소문자 변환 도구</S.Description>
			<S.DescriptionContents>
				텍스트를 다양한 케이스 형식으로 변환해보세요.
			</S.DescriptionContents>

			<S.InputSection>
				<InputWidget value={inputValue} onChange={setInputValue} />
			</S.InputSection>

			<S.Grid>
				{items.map((it) => (
					<ResultCardWidget
						key={it.title}
						title={it.title}
						sample={it.sample}
						result={it.result}
						onCopy={(v) => navigator.clipboard.writeText(v)}
					/>
				))}
			</S.Grid>
		</S.Wrapper>
	);
}
