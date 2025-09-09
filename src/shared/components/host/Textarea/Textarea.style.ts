import styled from '@emotion/styled';

export const Wrapper = styled.textarea<{ resize?: boolean }>`
	resize: ${(props) => (props.resize === true ? 'both' : 'none')};

	width: 100%;
	height: 100%;

	font-size: ${(props) => props.theme.fontSize.base};
	background-color: ${(props) => props.theme.colors.gray100};

	border-radius: ${(props) => props.theme.borderRadius.md};
	padding: ${(props) => props.theme.spacing(4)};
	border: none;
	outline: none;

	line-height: 1;
`;
