import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import * as S from './content.styled';
import { Sidebar } from '../sidebar';

interface ContentComponentProps {
	children?: ReactNode;
}

export function ContentComponent({ children }: ContentComponentProps) {
	return (
		<S.Wrapper>
			<S.SideMenu>
				<Sidebar />
			</S.SideMenu>
			<S.MainSection>{children || <Outlet />}</S.MainSection>
		</S.Wrapper>
	);
}
