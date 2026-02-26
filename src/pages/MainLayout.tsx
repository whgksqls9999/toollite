import {
	HeaderComponent,
	ContentComponent,
	FooterComponent,
	Container,
} from '@shared';
import { useCallback, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function MainLayout() {
	const { t } = useTranslation();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = useCallback(() => {
		setIsSidebarOpen((prev) => !prev);
	}, []);

	return (
		<>
			<Helmet>
				<title>{t('app.title')}</title>
				<meta
					name='description'
					content={t('app.description')}
				/>
				<meta
					name='keywords'
					content={t('app.keywords')}
				/>
				<meta
					property='og:title'
					content={t('app.title')}
				/>
				<meta
					property='og:description'
					content={t('app.description')}
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://toollite.vercel.app' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content={t('app.title')}
				/>
				<meta
					name='twitter:description'
					content={t('app.description')}
				/>
			</Helmet>
			<Container>
				<HeaderComponent
					onToggleSidebar={toggleSidebar}
					isSidebarOpen={isSidebarOpen}
				/>
				<ContentComponent
					isSidebarOpen={isSidebarOpen}
					onCloseSidebar={() => setIsSidebarOpen(false)}
				/>
				<FooterComponent />
				<Analytics />
			</Container>
		</>
	);
}
