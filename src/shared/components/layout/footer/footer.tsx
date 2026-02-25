import * as S from './footer.style';

export function FooterComponent() {
	const currentYear = new Date().getFullYear();
	return (
		<S.Wrapper>
			<S.Links>
				<S.FooterLink to="/privacy">개인정보처리방침</S.FooterLink>
				<S.FooterLink to="/about">사이트 소개</S.FooterLink>
			</S.Links>
			<S.Copyright>© {currentYear} Toollite. 무료 온라인 도구 모음.</S.Copyright>
		</S.Wrapper>
	);
}
