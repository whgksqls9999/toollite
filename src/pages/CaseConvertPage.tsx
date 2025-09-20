import { CaseConvertWidget } from '@features/transform-string';
import { Helmet } from 'react-helmet-async';

export function CaseConvertPage() {
	return (
		<>
			<Helmet>
				<title>
					대소문자 변환 도구 - 무료 온라인 텍스트 변환기 | Toollite
				</title>
				<meta
					name='description'
					content='텍스트를 대문자, 소문자, 카멜케이스, 스네이크케이스, 케밥케이스 등으로 쉽게 변환하는 무료 온라인 도구입니다.'
				/>
				<meta
					name='keywords'
					content='대소문자 변환, 텍스트 변환, 카멜케이스, 스네이크케이스, 케밥케이스, 파스칼케이스, 무료 도구'
				/>
			</Helmet>
			<CaseConvertWidget />
		</>
	);
}
