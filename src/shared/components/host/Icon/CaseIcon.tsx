import { IconProps } from './types';

export function CaseIcon({ size = 16, ...rest }: IconProps) {
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
			<text x='6' y='16' fontSize='12' fontWeight='500'>
				A
			</text>
			<text x='14' y='16' fontSize='12' fontWeight='400'>
				a
			</text>
		</svg>
	);
}
