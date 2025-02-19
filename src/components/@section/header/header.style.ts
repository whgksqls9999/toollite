import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 70px;
	/* background-color: #d8bfd8; */
	background-color: ${(props) => props.theme.color.purple_primary};
	color: ${(props) => props.theme.color.white};

	box-shadow: black 0 1px 4px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: xx-large;
	font-weight: 800;
`;
