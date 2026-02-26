import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border: 1px solid #e0e0e0;
	border-radius: 1rem;
	padding: 1rem;
`;

const Description = styled.div`
	padding: 1rem;
	font-weight: 500;
`;

const DescriptionContents = styled.p`
	color: #777777;
`;

const Box = styled.div`
	border: 1px dashed #c9c9c9;
	border-radius: 0.75rem;
	padding: 1rem;
	background: #fafafa;
`;

export function UnderConstructionPage() {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<Description>
				<div>{t('underConstruction.title')}</div>
				<DescriptionContents>
					{t('underConstruction.description')}
				</DescriptionContents>
			</Description>
			<Box>{t('underConstruction.note')}</Box>
		</Wrapper>
	);
}
