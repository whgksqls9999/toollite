import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { theme } from '@style';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.article`
	max-width: 720px;
	margin: 0 auto;
	padding: 2rem 1rem 4rem;
	line-height: 1.7;
	color: ${theme.colors.gray800};
`;

const Title = styled.h1`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${theme.colors.gray900};
	margin: 0 0 1.5rem 0;
`;

const LastUpdated = styled.p`
	font-size: ${theme.fontSize.sm};
	color: ${theme.colors.gray500};
	margin: 0 0 2rem 0;
`;

const Section = styled.section`
	margin-bottom: 2rem;

	& h2 {
		font-size: 1.125rem;
		font-weight: 600;
		color: ${theme.colors.gray900};
		margin: 0 0 0.75rem 0;
	}

	& p,
	& li {
		font-size: ${theme.fontSize.base};
		color: ${theme.colors.gray700};
		margin: 0 0 0.5rem 0;
	}

	& ul {
		margin: 0.5rem 0 1rem 1.25rem;
		padding: 0;
	}
`;

export function PrivacyPage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('privacy.pageTitle')}</title>
				<meta
					name="description"
					content={t('privacy.metaDescription')}
				/>
			</Helmet>
			<Wrapper>
				<Title>{t('privacy.title')}</Title>
				<LastUpdated>{t('privacy.lastUpdated')}</LastUpdated>

				<Section>
					<h2>{t('privacy.section1Title')}</h2>
					<p>{t('privacy.section1Body')}</p>
				</Section>

				<Section>
					<h2>{t('privacy.section2Title')}</h2>
					<p>{t('privacy.section2Intro')}</p>
					<ul>
						<li>{t('privacy.section2Item1')}</li>
						<li>{t('privacy.section2Item2')}</li>
						<li>{t('privacy.section2Item3')}</li>
					</ul>
				</Section>

				<Section>
					<h2>{t('privacy.section3Title')}</h2>
					<ul>
						<li>{t('privacy.section3Item1')}</li>
						<li>{t('privacy.section3Item2')}</li>
						<li>{t('privacy.section3Item3')}</li>
					</ul>
				</Section>

				<Section>
					<h2>{t('privacy.section4Title')}</h2>
					<p>{t('privacy.section4Body')}</p>
					<ul>
						<li>{t('privacy.section4Item1')}</li>
						<li>{t('privacy.section4Item2')}</li>
						<li>{t('privacy.section4Item3')}</li>
						<li>{t('privacy.section4Item4')}</li>
					</ul>
				</Section>

				<Section>
					<h2>{t('privacy.section5Title')}</h2>
					<p>{t('privacy.section5Body')}</p>
				</Section>

				<Section>
					<h2>{t('privacy.section6Title')}</h2>
					<p>{t('privacy.section6Body')}</p>
				</Section>

				<Section>
					<h2>{t('privacy.section7Title')}</h2>
					<p>{t('privacy.section7Body')}</p>
				</Section>

				<Section>
					<h2>{t('privacy.section8Title')}</h2>
					<p>{t('privacy.section8Body')}</p>
				</Section>
			</Wrapper>
		</>
	);
}
