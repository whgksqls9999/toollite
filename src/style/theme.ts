const rate = {
	fontRate: 1,
};

export const theme = {
	fontSize: {
		small: `${0.8 * rate.fontRate * 1}rem`,
		medium: `${1 * rate.fontRate * 1}rem`,
		large: `${1.2 * rate.fontRate * 1}rem`,
	},
};

declare module '@emotion/react' {
	export interface Theme {
		fontSize: {
			small: string;
			medium: string;
			large: string;
		};
	}
}
