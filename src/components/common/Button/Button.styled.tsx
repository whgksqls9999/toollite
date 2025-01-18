import styled from '@emotion/styled';

export const Wrapper = styled.button<{
	color: string;
	background_color: string;
}>`
	width: 50px;
	height: 30px;
	border-radius: 10px;
	border-style: solid;
	border-width: 1px;
	border-color: ${(props) => props.background_color};
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	color: ${(props) => props.color};
	background-color: ${(props) => props.background_color};
	transition: all 0.2s;

	:hover {
		color: ${(props) => props.background_color};
		background-color: ${(props) => props.color};
	}
`;

export const Icon = styled.span``;
export const Text = styled.span``;
