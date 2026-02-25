import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
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
	return (
		<>
			<Helmet>
				<title>사이트 소개 | Toollite</title>
				<meta
					name="description"
					content="Toollite는 텍스트 정리, 대소문자 변환, JSON 포맷터, PDF 도구 등 개발자와 일반 사용자를 위한 무료 온라인 유틸리티 모음입니다."
				/>
				<meta
					name="keywords"
					content="Toollite, 온라인 도구, 텍스트 도구, JSON 포맷터, PDF 합치기, 무료 유틸리티, 개발자 도구"
				/>
			</Helmet>
			<Wrapper>
				<Title>사이트 소개</Title>

				<Section>
					<h2>Toollite란?</h2>
					<p>
						Toollite(툴라이트)는 개발자, 기획자, 일반 사용자를 위한 무료 온라인 유틸리티 모음 사이트입니다.
						텍스트 정리, 대소문자 변환, JSON 포맷터, PDF 병합 등 자주 쓰는 작업을 브라우저에서 바로 사용할 수 있도록
						제공합니다. 설치 없이 빠르고 안전하게 이용할 수 있습니다.
					</p>
				</Section>

				<Section>
					<h2>제공 도구</h2>
					<p>
						현재 텍스트 정리(공백·줄바꿈 제거), 대소문자 변환, JSON 포맷터/미니파이, PDF 병합 등이 제공됩니다.
						추가 도구는 지속적으로 확장할 예정입니다. 모든 도구는 클라이언트에서 동작하며, 입력하신 내용을
						서버로 전송해 저장하지 않습니다.
					</p>
				</Section>

				<Section>
					<h2>이용 대상</h2>
					<p>
						코드나 문서를 다루는 개발자, 마케터, 사무직 등 누구나 사용할 수 있습니다. 개인·업무용 무료 이용을
						원칙으로 하며, 상업적 재배포나 도구의 무단 복제는 금지합니다.
					</p>
				</Section>

				<Section>
					<h2>문의 및 피드백</h2>
					<p>
						오류 제보, 기능 제안, 개인정보 관련 문의는 사이트에 공개된 채널(예: GitHub 이슈, 연락처)을 통해
						보내 주시면 됩니다. 개인정보처리방침은 별도 페이지에서 확인하실 수 있습니다.
					</p>
					<LinkList>
						<li>
							<Link to="/privacy">개인정보처리방침</Link>
						</li>
						<li>
							<Link to="/">홈으로 돌아가기</Link>
						</li>
					</LinkList>
				</Section>
			</Wrapper>
		</>
	);
}
