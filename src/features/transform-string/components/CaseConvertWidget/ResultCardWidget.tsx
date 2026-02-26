import * as S from './CaseConvertWidget.style';
import { IconButton, CopyIcon, useToastContext } from '@shared';
import { useTranslation } from 'react-i18next';

export interface ResultCardWidgetProps {
	title: string;
	sample: string;
	result: string;
	onCopy?: (value: string) => void;
}

export function ResultCardWidget({
	title,
	sample,
	result,
	onCopy,
}: ResultCardWidgetProps) {
	const { showToast } = useToastContext();
	const { t } = useTranslation();

	const handleCopy = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			showToast(t('common.toast.copySuccess'), 'success');
		} catch (error) {
			showToast(t('common.toast.copyError'), 'error');
		}
		onCopy?.(value);
	};

	return (
		<S.Card>
			<S.CardHeader>
				<div>
					<S.CardTitle>{title}</S.CardTitle>
					<S.Sample>{sample}</S.Sample>
				</div>
				<IconButton
					title={t('caseConvert.copyTitle')}
					icon={<CopyIcon size={16} />}
					onClick={() => handleCopy(result)}
				/>
			</S.CardHeader>
			<S.ResultBox>
				{result || t('caseConvert.resultPlaceholder')}
			</S.ResultBox>
		</S.Card>
	);
}
