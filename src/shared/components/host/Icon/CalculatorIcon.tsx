import { IconProps } from './types';

export function CalculatorIcon({ size = 16, ...rest }: IconProps) {
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
			<rect x='4' y='3' width='16' height='18' rx='2' />
			<line x1='8' y1='7' x2='16' y2='7' />
			<line x1='8' y1='11' x2='8' y2='11' />
			<line x1='12' y1='11' x2='12' y2='11' />
			<line x1='16' y1='11' x2='16' y2='11' />
			<line x1='8' y1='15' x2='8' y2='15' />
			<line x1='12' y1='15' x2='12' y2='15' />
			<line x1='16' y1='15' x2='16' y2='15' />
		</svg>
	);
}
