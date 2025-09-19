import { IconProps } from './types';

export function ExcelIcon({ size = 16, ...rest }: IconProps) {
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
			<rect x='3' y='4' width='18' height='16' rx='2' />
			<path d='M8 8l8 8M16 8l-8 8' />
		</svg>
	);
}
