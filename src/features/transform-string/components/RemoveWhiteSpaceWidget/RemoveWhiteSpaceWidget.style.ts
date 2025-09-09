import styled from '@emotion/styled';

export const Wrapper = styled.div`
	height: 40rem;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	border: 1px solid #e0e0e0;
	border-radius: 1rem;
	padding: 1rem;
`;

export const Description = styled.div`
	padding: 1rem;
`;

export const DescriptionContents = styled.p`
	color: #777777;
`;

export const TextAreaWrapper = styled.div`
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
