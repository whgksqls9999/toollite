import { css } from '@emotion/react';
import { theme } from '../../style/theme';

export const panelContainer = css`
	border: 1px solid #e0e0e0;
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	${theme.media.down.mobile} {
		padding: 0.75rem;
		border-radius: 0.75rem;
	}
`;

export const descriptionWrapper = css`
	padding: 1rem;
	${theme.media.down.mobile} {
		padding: 0.75rem;
	}
`;

export const descriptionTitle = css`
	font-weight: 500;
	${theme.media.down.mobile} {
		font-size: 0.95rem;
	}
`;

export const descriptionContents = css`
	color: #777777;
	${theme.media.down.mobile} {
		font-size: 0.9rem;
	}
`;

// Responsive utility mixins
export const responsive = {
	hideOnMobile: css`
		${theme.media.down.mobile} {
			display: none !important;
		}
	`,
	containerPadding: css`
		padding: 0 ${theme.spacing(6)};
		${theme.media.down.mobile} {
			padding: 0 ${theme.spacing(3)};
		}
	`,
	stackOnMobile: css`
		display: flex;
		gap: ${theme.spacing(4)};
		${theme.media.down.mobile} {
			flex-direction: column;
			gap: ${theme.spacing(3)};
		}
	`,
};
