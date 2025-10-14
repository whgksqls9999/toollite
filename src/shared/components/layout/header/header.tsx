import { LetterIcon } from '../../host';
import { IconButton } from '../../base';
import { MenuIcon } from '../../host';
import * as S from './header.style';

interface HeaderProps {
	onToggleSidebar?: () => void;
	isSidebarOpen?: boolean;
}

export function HeaderComponent({
	onToggleSidebar,
	isSidebarOpen,
}: HeaderProps) {
	return (
		<S.Wrapper>
			<S.HamburgerButton>
				<IconButton
					title={isSidebarOpen ? '사이드바 닫기' : '사이드바 열기'}
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
