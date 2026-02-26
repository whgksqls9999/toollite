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
import { useTranslation } from 'react-i18next';

export function CaseConvertWidget() {
	const { t } = useTranslation();
	const [inputValue, setInputValue] = useState<string>('');

	const items = useMemo(
		() => [
			{
				title: t('caseConvert.modes.lower'),
				sample: 'hello world',
				result: inputValue.toLowerCase(),
			},
			{
				title: t('caseConvert.modes.upper'),
				sample: 'HELLO WORLD',
				result: inputValue.toUpperCase(),
			},
			{
				title: t('caseConvert.modes.title'),
				sample: 'Hello World',
				result: toTitleCase(inputValue),
			},
			{
				title: t('caseConvert.modes.camel'),
				sample: 'helloWorld',
				result: toCamelCase(inputValue),
			},
			{
				title: t('caseConvert.modes.pascal'),
				sample: 'HelloWorld',
				result: toPascalCase(inputValue),
			},
			{
				title: t('caseConvert.modes.snake'),
				sample: 'hello_world',
				result: toSnakeCase(inputValue),
			},
			{
				title: t('caseConvert.modes.kebab'),
				sample: 'hello-world',
				result: toKebabCase(inputValue),
			},
		],
		[inputValue, t]
	);

	return (
		<S.Wrapper>
			<Description>
				<Description.Title>{t('caseConvert.title')}</Description.Title>
				<Description.Contents>
					{t('caseConvert.description')}
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
