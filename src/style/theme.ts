const rate = {
	fontRate: 1.2,
};

export const theme = {
	fontSize: {
		small: `${0.8 * rate.fontRate * 1}rem`,
		medium: `${1 * rate.fontRate * 1}rem`,
		large: `${1.2 * rate.fontRate * 1}rem`,
	},
	color: {
		white: '#FFFFFF',
		gray: '#F8F9FA',
		purple_primary: `#C9A0DC`,
	},
	borderRadius: {
		small: '0.3rem',
		normal: '0.5rem',
		large: '0.7rem',
	},
	padding: {
		small: `${0.6 * rate.fontRate}rem`,
		medium: `${1 * rate.fontRate}rem`,
		large: `${1.4 * rate.fontRate}rem`,
	},
	fontFamily: {
		light: 'GmarketSansLight',
		medium: 'GmarketSansMedium',
		bold: 'GmarketSansBold',
	},
};

declare module '@emotion/react' {
	export interface Theme {
		fontSize: {
			small: string;
			medium: string;
			large: string;
		};
		color: {
			white: string;
			gray: string;
			purple_primary: string;
		};
		borderRadius: {
			small: string;
			normal: string;
			large: string;
		};
		padding: {
			small: string;
			medium: string;
			large: string;
		};
		fontFamily: {
			light: string;
			medium: string;
			bold: string;
		};
	}
}
