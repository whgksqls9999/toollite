import {
	HeaderComponent,
	ContentComponent,
	FooterComponent,
	Container,
} from '@shared';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet-async';

export function MainPage() {
	return (
		<>
			<Helmet>
				<title>Toollite - 무료 온라인 도구 모음</title>
				<meta
					name='description'
					content='텍스트 정리, 대소문자 변환, URL 인코딩 등 다양한 도구를 무료로 제공합니다. 빠르고 정확한 온라인 도구로 생산성을 높이세요.'
				/>
				<meta
					name='keywords'
					content='온라인 도구, 텍스트 도구, 개발자 도구, 무료 도구, 텍스트 정리, 대소문자 변환, URL 인코딩, 공백 제거'
				/>
				<meta
					property='og:title'
					content='Toollite - 무료 온라인 도구 모음'
				/>
				<meta
					property='og:description'
					content='텍스트 정리, 대소문자 변환, URL 인코딩 등 다양한 도구를 무료로 제공합니다.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://toollite.vercel.app' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Toollite - 무료 온라인 도구 모음'
				/>
				<meta
					name='twitter:description'
					content='텍스트 정리, 대소문자 변환, URL 인코딩 등 다양한 도구를 무료로 제공합니다.'
				/>
			</Helmet>
			<Container>
				<HeaderComponent />
				<ContentComponent />
				<FooterComponent />
				<Analytics />
			</Container>
		</>
	);
}
