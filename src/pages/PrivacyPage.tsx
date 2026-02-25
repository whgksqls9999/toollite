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
	return (
		<>
			<Helmet>
				<title>개인정보처리방침 | Toollite</title>
				<meta
					name="description"
					content="Toollite 개인정보처리방침. 수집하는 정보, 이용 목적, 제3자 제공, 쿠키 및 접속 로그에 대한 안내입니다."
				/>
			</Helmet>
			<Wrapper>
				<Title>개인정보처리방침</Title>
				<LastUpdated>최종 업데이트: 2025년 2월</LastUpdated>

				<Section>
					<h2>1. 개요</h2>
					<p>
						Toollite(이하 “사이트”)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
						본 방침은 사이트에서 수집하는 정보, 이용 목적, 보관 및 파기, 이용자 권리에 대해 안내합니다.
					</p>
				</Section>

				<Section>
					<h2>2. 수집하는 정보</h2>
					<p>사이트는 서비스 제공 및 품질 개선을 위해 아래와 같은 정보를 수집할 수 있습니다.</p>
					<ul>
						<li>접속 로그: IP 주소, 브라우저 종류, 접속 일시, 참조 URL</li>
						<li>이용 환경: 디바이스 종류, 화면 해상도(분석 도구를 통한 익명 집계)</li>
						<li>도구 이용 시 입력하신 텍스트·파일: 서버에 저장되지 않으며, 당 세션 내 처리만 이루어집니다.</li>
					</ul>
				</Section>

				<Section>
					<h2>3. 이용 목적</h2>
					<ul>
						<li>서비스 제공, 오류 해결 및 안정성 확보</li>
						<li>접속 통계 및 이용 패턴 분석(익명화·집계)</li>
						<li>서비스 개선 및 신규 기능 기획</li>
					</ul>
				</Section>

				<Section>
					<h2>4. 제3자 제공 및 외부 서비스</h2>
					<p>
						사이트는 접속 분석 및 광고 서비스를 위해 아래 외부 서비스를 사용할 수 있습니다.
						각 서비스의 수집·이용 방식은 해당 사업자의 개인정보처리방침을 따릅니다.
					</p>
					<ul>
						<li>Google Analytics: 접속 통계 분석</li>
						<li>Google AdSense: 광고 게재(해당 시 적용)</li>
						<li>Microsoft Clarity: 이용 행태 분석(익명)</li>
						<li>Vercel: 호스팅 및 분석</li>
					</ul>
				</Section>

				<Section>
					<h2>5. 쿠키</h2>
					<p>
						쿠키는 이용 편의와 서비스 분석을 위해 사용됩니다. 브라우저 설정에서 쿠키 사용을 제한할 수 있으며,
						제한 시 일부 기능이 제대로 동작하지 않을 수 있습니다.
					</p>
				</Section>

				<Section>
					<h2>6. 보관 및 파기</h2>
					<p>
						접속 로그 등은 법령에서 정한 기간 또는 서비스 운영에 필요한 기간 동안 보관 후 파기합니다.
						도구 이용 시 입력한 내용은 서버에 저장되지 않으며, 페이지를 벗어나면 별도 보관되지 않습니다.
					</p>
				</Section>

				<Section>
					<h2>7. 이용자 권리</h2>
					<p>
						이용자는 개인정보 처리에 관한 문의·열람·정정·삭제 요청을 할 수 있습니다. 관련 요청은 사이트 소개 페이지의
						안내를 통해 연락해 주시면 됩니다.
					</p>
				</Section>

				<Section>
					<h2>8. 변경 사항</h2>
					<p>
						개인정보처리방침이 변경되는 경우 사이트 내에 공지하며, 중요한 변경 시에는 갱신일을 명시합니다.
					</p>
				</Section>
			</Wrapper>
		</>
	);
}
