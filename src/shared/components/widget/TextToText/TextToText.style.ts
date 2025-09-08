import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	width: 100%;
	height: 100%;
`;

export const VerticalSection = styled.div`
	height: 100%;

	display: flex;
	align-items: start;
	justify-content: center;
	flex: 1;
	flex-direction: column;

	gap: 10px;
`;
