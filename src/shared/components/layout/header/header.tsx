import { LetterIcon } from '../../host';
import { IconButton } from '../../base';
import { MenuIcon } from '../../host';
import * as S from './header.style';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, useCallback } from 'react';

interface HeaderProps {
	onToggleSidebar?: () => void;
	isSidebarOpen?: boolean;
}

export function HeaderComponent({
	onToggleSidebar,
	isSidebarOpen,
}: HeaderProps) {
	const { t, i18n } = useTranslation();

	const handleChangeLanguage = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			const value = event.target.value as 'ko' | 'en';
			i18n.changeLanguage(value);
		},
		[i18n],
	);

	const currentLanguage =
		(i18n.language || '').startsWith('ko') ? 'ko' : 'en';

	return (
		<S.Wrapper>
			<S.HamburgerButton>
				<IconButton
					title={
						isSidebarOpen
							? t('layout.header.toggleSidebarClose')
							: t('layout.header.toggleSidebarOpen')
					}
					onClick={onToggleSidebar}
					icon={<MenuIcon />}
				/>
			</S.HamburgerButton>
			<S.TitleLink
				to='/'
				style={{ textDecoration: 'none', color: 'inherit' }}
			>
				<S.TitleContainer>
					<LetterIcon letter='T' />
					<span>Toollite</span>
				</S.TitleContainer>
			</S.TitleLink>
			<S.LanguageSelector>
				<select
					aria-label={
						t('layout.header.languageSelect', {
							defaultValue: '언어 선택',
						}) as string
					}
					value={currentLanguage}
					onChange={handleChangeLanguage}
				>
					<option value='ko'>한국어</option>
					<option value='en'>English</option>
				</select>
			</S.LanguageSelector>
		</S.Wrapper>
	);
}
