import styled from '@emotion/styled';

export const Wrapper = styled.textarea<{ resize?: boolean }>`
	resize: ${(props) => (props.resize === true ? 'both' : 'none')};

	width: 100%;
	height: 100%;

	font-size: ${(props) => props.theme.fontSize.medium};
	background-color: ${(props) => props.theme.color.gray};

	border-radius: ${(props) => props.theme.borderRadius.normal};
	padding: ${(props) => props.theme.padding.medium};
	border: none;
	outline: none;

	line-height: 1;
`;
