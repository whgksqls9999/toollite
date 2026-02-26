import { PdfMergeWidget, PdfSplitWidget } from '@features/pdf-tools';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { theme } from '@style';
import { useState } from 'react';

const Tabs = styled.div`
	display: inline-flex;
	border-radius: ${theme.borderRadius.round};
	border: 1px solid ${theme.colors.gray300};
	overflow: hidden;
	margin-bottom: ${theme.spacing(4)};
`;

const TabButton = styled.button<{ active?: boolean }>`
	padding: ${theme.spacing(1.5)} ${theme.spacing(4)};
	border: none;
	background: ${({ active }) =>
		active ? theme.colors.gray900 : theme.colors.white};
	color: ${({ active }) =>
		active ? theme.colors.white : theme.colors.gray700};
	font-size: ${theme.fontSize.sm};
	cursor: pointer;

	&:not(:last-of-type) {
		border-right: 1px solid ${theme.colors.gray300};
	}

	&:hover {
		background: ${({ active }) =>
			active ? theme.colors.gray900 : theme.colors.gray100};
	}
`;

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(3)};
`;

export function PdfToolsPage() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState<'merge' | 'split'>('merge');

	return (
		<>
			<Helmet>
				<title>{t('pdfTools.pageTitle')}</title>
				<meta
					name='description'
					content={t('pdfTools.metaDescription')}
				/>
			</Helmet>
			<PageWrapper>
				<Tabs>
					<TabButton
						type='button'
						active={activeTab === 'merge'}
						onClick={() => setActiveTab('merge')}
					>
						{t('pdfTools.tabs.merge')}
					</TabButton>
					<TabButton
						type='button'
						active={activeTab === 'split'}
						onClick={() => setActiveTab('split')}
					>
						{t('pdfTools.tabs.split')}
					</TabButton>
				</Tabs>
				{activeTab === 'merge' ? <PdfMergeWidget /> : <PdfSplitWidget />}
			</PageWrapper>
		</>
	);
}
