import { memo } from 'react';
import { Outlet } from 'react-router';
import * as S from './content.styled';

export const ContentComponent = memo(function ContentComponent() {
	return (
		<S.Wrapper>
			<Outlet />
		</S.Wrapper>
	);
});
