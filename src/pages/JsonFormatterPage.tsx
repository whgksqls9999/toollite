import { JsonFormatterWidget } from '@features/transform-string';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function JsonFormatterPage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('jsonFormatter.pageTitle')}</title>
				<meta
					name='description'
					content={t('jsonFormatter.metaDescription')}
				/>
				<meta
					name='keywords'
					content={t('jsonFormatter.metaKeywords')}
				/>
			</Helmet>
			<JsonFormatterWidget />
		</>
	);
}

