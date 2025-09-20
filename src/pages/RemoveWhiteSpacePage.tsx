import { RemoveWhiteSpaceWidget } from '@features/transform-string';
import { Helmet } from 'react-helmet-async';

export function RemoveWhiteSpacePage() {
	return (
		<>
			<Helmet>
				<title>
					텍스트 정리 도구 - 공백 제거, 줄바꿈 정리 | Toollite
				</title>
				<meta
					name='description'
					content='텍스트의 공백, 탭, 줄바꿈을 정리하여 깔끔하게 만드는 무료 온라인 도구입니다. 연속된 공백을 하나로 합치거나 모든 공백을 제거할 수 있습니다.'
				/>
				<meta
					name='keywords'
					content='텍스트 정리, 공백 제거, 줄바꿈 제거, 탭 제거, 텍스트 정리 도구, 무료 도구'
				/>
			</Helmet>
			<RemoveWhiteSpaceWidget />
		</>
	);
}
