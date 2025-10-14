import styled from '@emotion/styled';
import { theme } from '../../../../style/theme';

export const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;
	flex: 1;
	${theme.media.down.mobile} {
		flex-direction: column;
	}
`;

export const SideMenu = styled.div<{ isOpen?: boolean }>`
	width: 14rem;
	height: 100%;
	flex-shrink: 0;
	border-right: 1px solid #e0e0e0;
	${theme.media.down.mobile} {
		position: fixed;
		top: 70px;
		left: 0;
		width: 280px;
		height: calc(100vh - 70px);
		background: white;
		border-right: 1px solid #e0e0e0;
		z-index: 1000;
		transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
		transition: transform 0.3s ease-in-out;
		box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
	}
`;

export const MainSection = styled.div`
	flex: 1;
	padding: 2rem;
	${theme.media.down.mobile} {
		padding: 1rem;
	}
`;

export const Backdrop = styled.div<{ isOpen?: boolean }>`
	display: none;
	${theme.media.down.mobile} {
		display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
		position: fixed;
		top: 70px;
		left: 0;
		width: 100vw;
		height: calc(100vh - 70px);
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}
	${theme.media.up.tablet} {
		display: none !important;
	}
`;
