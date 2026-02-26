import { useMemo, useState } from 'react';
import * as S from './RemoveWhiteSpaceWidget.style';
import { Description } from '@shared';
import {
	RadioGroup,
	RadioGroupProps,
	TextToText,
	ButtonProps,
	CopyIcon,
	ResetIcon,
	useToastContext,
} from '@shared';
import { useTranslation } from 'react-i18next';

export function RemoveWhiteSpaceWidget() {
	const { t } = useTranslation();
	const [selectedTransform, setSelectedTransform] = useState<number>(0);
	const [inputValue, setInputValue] = useState<string>('');
	const [fromValue, setFromValue] = useState<string>('');
	const [toValue, setToValue] = useState<string>('');
	const { showToast } = useToastContext();

	const transforms = useMemo(
		() => [
			{
				id: 0,
				label: t('removeWhitespace.optionRemoveAll'),
				fn: (s: string) => s.replace(/\s+/g, ''),
				type: 'default' as const,
			},
			{
				id: 1,
				label: t('removeWhitespace.optionCollapseSpaces'),
				fn: (s: string) => s.replace(/\s+/g, ' '),
				type: 'default' as const,
			},
			{
				id: 2,
				label: t('removeWhitespace.optionReplace'),
				fn: (s: string) => {
					if (!fromValue) return s;
					return s.replace(
						new RegExp(
							fromValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
							'g'
						),
						toValue
					);
				},
				type: 'replace' as const,
			},
		],
		[fromValue, toValue, t]
	);

	const outputValue = transforms[selectedTransform].fn(inputValue);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(outputValue);
			showToast(t('common.toast.copySuccess'), 'success');
		} catch (error) {
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

	const optionProps: RadioGroupProps = {
		name: 'remove_option',
		options: transforms.map((t) => ({
			value: t.id,
			label: t.label,
			type: t.type,
			fromValue: fromValue,
			toValue: toValue,
			onFromChange: setFromValue,
			onToChange: setToValue,
		})),
		value: selectedTransform,
		onChange: (v) => setSelectedTransform(Number(v)),
	};

	return (
		<S.Wrapper>
			<Description>
				<Description.Title>
					{t('removeWhitespace.title')}
				</Description.Title>
				<Description.Contents>
					{t('removeWhitespace.description')}
				</Description.Contents>
			</Description>
			<RadioGroup {...optionProps} />
			<TextToText
				value={inputValue}
				onChange={setInputValue}
				outputValue={outputValue}
				toolbar={toolbar}
				inputProps={{
					placeholder: t('removeWhitespace.inputPlaceholder'),
				}}
				outputProps={{ readOnly: true }}
			/>
		</S.Wrapper>
	);
}
