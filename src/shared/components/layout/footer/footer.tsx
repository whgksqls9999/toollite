import * as S from './footer.style';
import { useTranslation } from 'react-i18next';

export function FooterComponent() {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<S.Wrapper>
			<S.Links>
				<S.FooterLink to="/privacy">
					{t('layout.footer.privacy')}
				</S.FooterLink>
				<S.FooterLink to="/about">
					{t('layout.footer.about')}
				</S.FooterLink>
			</S.Links>
			<S.Copyright>
				{t('layout.footer.copyright', { year: currentYear })}
			</S.Copyright>
		</S.Wrapper>
	);
}
