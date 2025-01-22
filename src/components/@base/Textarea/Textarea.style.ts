import styled from '@emotion/styled';

export const Wrapper = styled.textarea<{ resize?: boolean }>`
	resize: ${(props) => (props.resize === true ? 'both' : 'none')};
	width: 100%;
	height: 100%;
	font-size: ${(props) => props.theme.fontSize.medium};
	border-radius: 0.5rem;
	padding: 0.5rem;
`;
