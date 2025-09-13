import * as S from './CaseConvertWidget.style';
import { IconButton, CopyIcon } from '@shared';

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
					onClick={() => onCopy?.(result)}
				/>
			</S.CardHeader>
			<S.ResultBox>{result || '결과가 여기에 표시됩니다'}</S.ResultBox>
		</S.Card>
	);
}
