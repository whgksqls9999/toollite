import { CaseConvertWidget } from '@features/transform-string';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function CaseConvertPage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('caseConvert.pageTitle')}</title>
				<meta
					name='description'
					content={t('caseConvert.metaDescription')}
				/>
				<meta
					name='keywords'
					content={t('caseConvert.metaKeywords')}
				/>
			</Helmet>
			<CaseConvertWidget />
		</>
	);
}
