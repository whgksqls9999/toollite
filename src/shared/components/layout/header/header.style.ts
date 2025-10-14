import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../../../style/theme';

export const Wrapper = styled.div`
	width: 100%;
	height: 70px;

	display: flex;
	align-items: center;
	justify-content: start;

	position: relative;
	font-size: x-large;
	font-weight: 800;
	padding: 1rem;

	border-bottom: 1px solid #e0e0e0;

	${theme.media.down.mobile} {
		height: 56px;
		font-size: large;
		padding: 0.75rem;
	}
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

export const TitleLink = styled(Link)`
	${theme.media.down.mobile} {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const HamburgerButton = styled.div`
	display: none;
	${theme.media.down.mobile} {
		display: block;
	}
`;
