import { IconProps } from './types';

export function PaletteIcon({ size = 16, ...rest }: IconProps) {
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
			<path d='M12 21a9 9 0 1 1 9-9c0 2.5-2 3-4 3-1.5 0-2 1.5-2 3 0 1.5-1 3-3 3z' />
			<circle cx='7.5' cy='10.5' r='1' />
			<circle cx='12' cy='7.5' r='1' />
			<circle cx='16.5' cy='10.5' r='1' />
		</svg>
	);
}
