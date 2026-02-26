import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { theme } from '@style';
import { TextIcon, PdfIcon, PaletteIcon } from '@shared';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0;
`;

const HeroSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 1.5rem;
	padding: 2rem 0;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	background: ${theme.colors.gray900};
	border-radius: ${theme.borderRadius.lg};
	margin-bottom: 1rem;
`;

const LogoIcon = styled.div`
	color: ${theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${theme.colors.gray900};
	margin: 0;
	line-height: 1.2;
`;

const Description = styled.p`
	font-size: 1.125rem;
	color: ${theme.colors.gray600};
	margin: 0;
	line-height: 1.6;
	max-width: 600px;
`;

const ToolsSection = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
`;

const ToolIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	background: ${theme.colors.gray100};
	border-radius: ${theme.borderRadius.md};
	margin-bottom: 1.5rem;
	color: ${theme.colors.gray700};
	transition: all 0.2s ease;
`;

const ToolCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 2rem;
	background: ${theme.colors.white};
	border: 1px solid ${theme.colors.gray200};
	border-radius: ${theme.borderRadius.lg};
	box-shadow: ${theme.shadow.sm};
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;

	&:hover {
		background: ${theme.colors.gray100};
		box-shadow: ${theme.shadow.md};
		transform: translateY(-2px);
		text-decoration: none;

		.tool-icon {
			background: ${theme.colors.gray200};
		}
	}
`;

const ToolTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${theme.colors.gray900};
	margin: 0 0 1rem 0;
`;

const ToolDescription = styled.p`
	font-size: 1rem;
	color: ${theme.colors.gray600};
	margin: 0;
	line-height: 1.5;
`;

export function MainPage() {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<Helmet>
				<title>{t('app.title')}</title>
				<meta
					name="description"
					content={t('app.description')}
				/>
				<meta
					name="keywords"
					content="Toollite, 온라인 도구, 텍스트 정리, JSON 포맷터, PDF 도구, 무료 유틸리티, 개발자 도구"
				/>
			</Helmet>
			{/* Hero Section */}
			<HeroSection>
				<LogoContainer>
					<LogoIcon>
						<svg
							width='48'
							height='48'
							viewBox='0 0 24 24'
							fill='none'
						>
							<path
								d='M12 2L2 7L12 12L22 7L12 2Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M2 17L12 22L22 17'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M2 12L12 17L22 12'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</LogoIcon>
				</LogoContainer>
				<Title>{t('main.heroTitle')}</Title>
				<Description>{t('main.heroDescription')}</Description>
			</HeroSection>

			{/* Tools Section */}
			<ToolsSection>
				{/* 텍스트 도구 */}
				<Link to='/text/clean'>
					<ToolCard>
						<ToolIcon className='tool-icon'>
							<TextIcon size={32} />
						</ToolIcon>
						<ToolTitle>{t('main.textToolsTitle')}</ToolTitle>
						<ToolDescription>
							{t('main.textToolsDescription')}
						</ToolDescription>
					</ToolCard>
				</Link>

				{/* 파일 변환 */}
				<Link to='/files/pdf'>
					<ToolCard>
						<ToolIcon className='tool-icon'>
							<PdfIcon size={32} />
						</ToolIcon>
						<ToolTitle>{t('main.fileToolsTitle')}</ToolTitle>
						<ToolDescription>
							{t('main.fileToolsDescription')}
						</ToolDescription>
					</ToolCard>
				</Link>

				{/* 기타 도구 */}
				<Link to='/misc/colors'>
					<ToolCard>
						<ToolIcon className='tool-icon'>
							<PaletteIcon size={32} />
						</ToolIcon>
						<ToolTitle>{t('main.miscToolsTitle')}</ToolTitle>
						<ToolDescription>
							{t('main.miscToolsDescription')}
						</ToolDescription>
					</ToolCard>
				</Link>
			</ToolsSection>
		</Wrapper>
	);
}
