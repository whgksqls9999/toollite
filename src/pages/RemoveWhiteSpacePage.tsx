import { RemoveWhiteSpaceWidget } from '@features/transform-string';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function RemoveWhiteSpacePage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('removeWhitespace.pageTitle')}</title>
				<meta
					name='description'
					content={t('removeWhitespace.metaDescription')}
				/>
				<meta
					name='keywords'
					content={t('removeWhitespace.metaKeywords')}
				/>
			</Helmet>
			<RemoveWhiteSpaceWidget />
		</>
	);
}
