import { IconProps } from './types';

export function ImageIcon({ size = 16, ...rest }: IconProps) {
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
			<circle cx='9' cy='10' r='2' />
			<path d='M21 18l-6-6-4 4-2-2-4 4' />
		</svg>
	);
}
