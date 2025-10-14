import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import * as S from './content.styled';
import { Sidebar } from '../sidebar';

interface ContentComponentProps {
	children?: ReactNode;
	isSidebarOpen?: boolean;
	onCloseSidebar?: () => void;
}

export function ContentComponent({
	children,
	isSidebarOpen = true,
	onCloseSidebar,
}: ContentComponentProps) {
	return (
		<S.Wrapper>
			<S.Backdrop isOpen={isSidebarOpen} onClick={onCloseSidebar} />
			<S.SideMenu isOpen={isSidebarOpen}>
				<Sidebar onClose={onCloseSidebar} />
			</S.SideMenu>
			<S.MainSection>{children || <Outlet />}</S.MainSection>
		</S.Wrapper>
	);
}
