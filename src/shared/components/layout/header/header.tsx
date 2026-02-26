import { LetterIcon } from '../../host';
import { IconButton } from '../../base';
import { MenuIcon } from '../../host';
import * as S from './header.style';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
	onToggleSidebar?: () => void;
	isSidebarOpen?: boolean;
}

export function HeaderComponent({
	onToggleSidebar,
	isSidebarOpen,
}: HeaderProps) {
	const { t } = useTranslation();

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
		</S.Wrapper>
	);
}
