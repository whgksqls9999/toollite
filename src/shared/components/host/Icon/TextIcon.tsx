import { IconProps } from './types';

export function TextIcon({ size = 16, ...rest }: IconProps) {
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
			<rect x='3' y='4' width='18' height='16' rx='2' ry='2' />
			<line x1='7' y1='8' x2='17' y2='8' />
			<line x1='7' y1='12' x2='17' y2='12' />
			<line x1='7' y1='16' x2='13' y2='16' />
		</svg>
	);
}
