import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;

	padding: 1rem;
	border-radius: 1rem;

	background-color: ${(props) => props.theme.color.gray};
`;
