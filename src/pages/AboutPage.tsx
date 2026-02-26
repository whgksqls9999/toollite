import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { theme } from '@style';

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

const Section = styled.section`
	margin-bottom: 2rem;

	& h2 {
		font-size: 1.125rem;
		font-weight: 600;
		color: ${theme.colors.gray900};
		margin: 0 0 0.75rem 0;
	}

	& p {
		font-size: ${theme.fontSize.base};
		color: ${theme.colors.gray700};
		margin: 0 0 0.5rem 0;
	}
`;

const LinkList = styled.ul`
	list-style: none;
	margin: 1rem 0 0 0;
	padding: 0;

	& li {
		margin-bottom: 0.5rem;
	}

	& a {
		color: ${theme.colors.primary};
		text-decoration: none;
	}

	& a:hover {
		text-decoration: underline;
	}
`;

export function AboutPage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('about.pageTitle')}</title>
				<meta
					name="description"
					content={t('about.metaDescription')}
				/>
				<meta
					name="keywords"
					content={t('about.metaKeywords')}
				/>
			</Helmet>
			<Wrapper>
				<Title>{t('about.title')}</Title>

				<Section>
					<h2>{t('about.whatIsTitle')}</h2>
					<p>{t('about.whatIsBody')}</p>
				</Section>

				<Section>
					<h2>{t('about.toolsTitle')}</h2>
					<p>{t('about.toolsBody')}</p>
				</Section>

				<Section>
					<h2>{t('about.targetTitle')}</h2>
					<p>{t('about.targetBody')}</p>
				</Section>

				<Section>
					<h2>{t('about.contactTitle')}</h2>
					<p>{t('about.contactBody')}</p>
					<LinkList>
						<li>
							<Link to="/privacy">{t('about.linkPrivacy')}</Link>
						</li>
						<li>
							<Link to="/">{t('about.linkHome')}</Link>
						</li>
					</LinkList>
				</Section>
			</Wrapper>
		</>
	);
}
