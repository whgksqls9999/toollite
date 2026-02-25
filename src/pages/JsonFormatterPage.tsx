import { JsonFormatterWidget } from '@features/transform-string';
import { Helmet } from 'react-helmet-async';

export function JsonFormatterPage() {
	return (
		<>
			<Helmet>
				<title>JSON 포맷터 - 자동 포맷 & 미니파이 | Toollite</title>
				<meta
					name='description'
					content='JSON 문자열을 자동으로 포맷하거나 미니파이하고, 일반 텍스트를 JSON 문자열로 감싸주는 무료 온라인 JSON 포맷터입니다.'
				/>
				<meta
					name='keywords'
					content='JSON 포맷터, JSON 포맷, JSON 미니파이, JSON 문자열, JSON 도구, 온라인 JSON 포맷터'
				/>
			</Helmet>
			<JsonFormatterWidget />
		</>
	);
}

