import { IconProps } from './types';

export function ResetIcon({ size = 16, ...rest }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			{...rest}
		>
			<polyline points='1 4 1 10 7 10'></polyline>
			<path d='M3.51 15a9 9 0 1 0 2.13-9.36L1 10'></path>
		</svg>
	);
}
