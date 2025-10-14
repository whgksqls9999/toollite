import styled from '@emotion/styled';
import { theme } from '../../../../style/theme';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	${theme.media.down.mobile} {
		padding-bottom: ${theme.spacing(4)};
	}
`;
