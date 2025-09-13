import {} from 'react';
import { Outlet } from 'react-router';
import * as S from './content.styled';
import { Sidebar } from '../sidebar';

export function ContentComponent() {
	return (
		<S.Wrapper>
			<S.SideMenu>
				<Sidebar />
			</S.SideMenu>
			<S.MainSection>
				<Outlet />
			</S.MainSection>
		</S.Wrapper>
	);
}
