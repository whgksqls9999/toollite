import * as S from './CaseConvertWidget.style';
import { IconButton, CopyIcon, useToastContext } from '@shared';

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

	const handleCopy = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			showToast('클립보드에 복사가 완료됐습니다!', 'success');
		} catch (error) {
			showToast('복사에 실패했습니다.', 'error');
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
					title='복사'
					icon={<CopyIcon size={16} />}
					onClick={() => handleCopy(result)}
				/>
			</S.CardHeader>
			<S.ResultBox>{result || '결과가 여기에 표시됩니다'}</S.ResultBox>
		</S.Card>
	);
}
