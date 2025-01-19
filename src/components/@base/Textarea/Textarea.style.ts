import styled from '@emotion/styled';

export const Wrapper = styled.textarea<{ resize?: boolean }>`
	resize: ${(props) => (props.resize === true ? 'both' : 'none')};
`;
