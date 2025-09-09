import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@style';

// export const Wrapper = styled.button<{
// 	variant: ButtonVariant;
// }>`
// 	border-radius: 10px;
// 	border: none;
// 	cursor: pointer;

// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	transition: all 0.2s;
// 	padding: 0.8em;
// 	font-size: 1em;

// 	${({ variant }) => `
//     color: ${BUTTON_VARIANTS[variant].color};
//     background-color: ${BUTTON_VARIANTS[variant].background};
//     &:hover {
//       color: ${BUTTON_VARIANTS[variant].hover?.color};
//       background-color: ${BUTTON_VARIANTS[variant].hover?.background};
//     }
//   `};
// `;

export const Icon = styled.span``;
export const Text = styled.span`
	white-space: nowrap;
`;

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
	variant?: ButtonVariant;
	fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: ${theme.spacing(2)} ${theme.spacing(4)};
	font-size: ${theme.fontSize.base};
	font-weight: 500;
	border-radius: ${theme.borderRadius.md};
	border: none;
	cursor: pointer;
	transition: background 0.2s ease, color 0.2s ease;

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ variant }) => {
		switch (variant) {
			case 'primary':
				return css`
					background: ${theme.colors.primary};
					color: ${theme.colors.white};
					&:hover {
						background: ${theme.colors.primaryHover};
					}
				`;
			case 'secondary':
				return css`
					background: ${theme.colors.gray100};
					color: ${theme.colors.gray700};
					border: 1px solid ${theme.colors.gray300};
					&:hover {
						background: ${theme.colors.gray200};
					}
				`;
			case 'danger':
				return css`
					background: ${theme.colors.danger};
					color: ${theme.colors.white};
					&:hover {
						background: #dc2626;
					}
				`;
			default:
				return css`
					background: ${theme.colors.gray200};
					color: ${theme.colors.black};
					&:hover {
						background: ${theme.colors.gray300};
					}
				`;
		}
	}}
`;
