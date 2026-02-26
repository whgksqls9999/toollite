import styled from '@emotion/styled';
import { panelContainer } from '@shared';

export const Wrapper = styled.div`
	${panelContainer};
	/* JSON 포매터와 동일한 최소 높이를 적용해 레이아웃 일관성 유지 */
	min-height: 40rem;
`;
