import styled from '@emotion/styled';

export const Wrapper = styled.button<{
	color?: string;
	background_color?: string;
}>`
	border-radius: 10px;
	border: none;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	color: ${(props) => props.color ?? props.theme.color.white};
	background-color: ${(props) =>
		props.background_color ?? props.theme.color.purple_primary};
	transition: all 0.2s;

	:hover {
		color: ${(props) => props.background_color};
		background-color: ${(props) => props.color};
	}

	padding: 0.8em;
	font-size: 1em;
`;

export const Icon = styled.span``;
export const Text = styled.span`
	white-space: nowrap;
`;
