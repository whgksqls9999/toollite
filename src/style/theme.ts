// theme.ts
export const theme = {
	colors: {
		white: '#FFFFFF',
		black: '#000000',
		gray100: '#F7F8FA',
		gray200: '#E5E7EB',
		gray300: '#D1D5DB',
		gray400: '#9CA3AF',
		gray500: '#6B7280',
		gray600: '#4B5563',
		gray700: '#374151',
		gray800: '#1F2937',
		gray900: '#111827',
		primary: '#3B82F6', // 포인트 블루
		primaryHover: '#2563EB',
		danger: '#EF4444',
		success: '#10B981',
	},
	borderRadius: {
		sm: '6px',
		md: '10px',
		lg: '12px',
		xl: '16px',
	},
	spacing: (factor: number) => `${factor * 4}px`,
	// 3-tier responsive breakpoints: mobile, tablet, desktop
	breakpoints: {
		mobile: 767, // <= 767px
		tablet: 1199, // 768px ~ 1199px
		desktop: 1200, // >= 1200px
	},
	media: {
		down: {
			mobile: '@media (max-width: 767px)',
			tablet: '@media (max-width: 1199px)',
		},
		up: {
			tablet: '@media (min-width: 768px)',
			desktop: '@media (min-width: 1200px)',
		},
		between: {
			mobileAndTablet:
				'@media (min-width: 768px) and (max-width: 1199px)',
		},
	},
	fontSize: {
		sm: '14px',
		base: '16px',
		lg: '18px',
		xl: '20px',
	},
	shadow: {
		sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
		md: '0 2px 4px rgba(0, 0, 0, 0.1)',
		lg: '0 4px 6px rgba(0, 0, 0, 0.1)',
	},
};

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			white: string;
			black: string;
			gray100: string;
			gray200: string;
			gray300: string;
			gray400: string;
			gray500: string;
			gray600: string;
			gray700: string;
			gray800: string;
			gray900: string;
			primary: string;
			primaryHover: string;
			danger: string;
			success: string;
		};
		borderRadius: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		spacing: (factor: number) => string;
		breakpoints: {
			mobile: number;
			tablet: number;
			desktop: number;
		};
		media: {
			down: {
				mobile: string;
				tablet: string;
			};
			up: {
				tablet: string;
				desktop: string;
			};
			between: {
				mobileAndTablet: string;
			};
		};
		fontSize: {
			sm: string;
			base: string;
			lg: string;
			xl: string;
		};
		shadow: {
			sm: string;
			md: string;
			lg: string;
		};
	}
}
