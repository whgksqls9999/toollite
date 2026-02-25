import { useMemo, useState } from 'react';
import * as S from './CaseConvertWidget.style';
import { Description } from '@shared';
import { InputWidget } from './InputWidget';
import { ResultCardWidget } from './ResultCardWidget';
import {
	toTitleCase,
	toCamelCase,
	toSnakeCase,
	toKebabCase,
	toPascalCase,
} from '../../lib/case';

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
				title: '파스칼 케이스',
				sample: 'HelloWorld',
				result: toPascalCase(inputValue),
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
			<Description>
				<Description.Title>대소문자 변환 도구</Description.Title>
				<Description.Contents>
					텍스트를 다양한 케이스 형식으로 변환해보세요.
				</Description.Contents>
			</Description>

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
