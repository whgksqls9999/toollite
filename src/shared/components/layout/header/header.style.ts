import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: start;

	font-size: x-large;
	font-weight: 800;
	padding: 1rem;

	border-bottom: 1px solid #e0e0e0;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.8;
	}
`;
