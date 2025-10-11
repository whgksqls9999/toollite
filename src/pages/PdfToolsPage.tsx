import { PdfMergeWidget } from '@features/pdf-tools';
import { Helmet } from 'react-helmet-async';

export function PdfToolsPage() {
	return (
		<>
			<Helmet>
				<title>PDF 병합 도구 | Toollite</title>
				<meta
					name='description'
					content='여러 PDF 또는 이미지 파일을 하나의 PDF로 브라우저에서 안전하게 병합하세요.'
				/>
			</Helmet>
			<PdfMergeWidget />
		</>
	);
}
