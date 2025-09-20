import styled from '@emotion/styled';
import { theme } from '@style';

export const ToastContainer = styled.div<{
	$isVisible: boolean;
	$type: 'success' | 'error' | 'info';
}>`
	position: fixed;
	bottom: 20px;
	left: 50%;
	z-index: 9999;
	transform: translateX(-50%)
		translateY(${({ $isVisible }) => ($isVisible ? '0' : '100%')});
	opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;

	/* 초기 상태를 명확히 설정 */
	&:not([data-visible='true']) {
		transform: translateX(-50%) translateY(100%);
		opacity: 0;
	}
`;

export const ToastContent = styled.div<{
	$type?: 'success' | 'error' | 'info';
}>`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 16px;
	background: ${({ $type }) => {
		switch ($type) {
			case 'success':
				return theme.colors.success;
			case 'error':
				return theme.colors.danger;
			case 'info':
				return theme.colors.primary;
			default:
				return theme.colors.success;
		}
	}};
	color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.md};
	border: 1px solid
		${({ $type }) => {
			switch ($type) {
				case 'success':
					return '#059669'; // success보다 약간 어두운 색상
				case 'error':
					return '#dc2626'; // danger보다 약간 어두운 색상
				case 'info':
					return '#2563eb'; // primaryHover 색상
				default:
					return '#059669';
			}
		}};
	box-shadow: ${theme.shadow.lg};
	min-width: 200px;
	max-width: 400px;
`;

export const ToastMessage = styled.span`
	font-size: ${theme.fontSize.sm};
	font-weight: 500;
	flex: 1;
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	color: ${theme.colors.white};
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	padding: 0;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;
