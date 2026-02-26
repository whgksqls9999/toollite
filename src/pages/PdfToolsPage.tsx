import { PdfMergeWidget } from '@features/pdf-tools';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function PdfToolsPage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('pdfTools.pageTitle')}</title>
				<meta
					name='description'
					content={t('pdfTools.metaDescription')}
				/>
			</Helmet>
			<PdfMergeWidget />
		</>
	);
}
