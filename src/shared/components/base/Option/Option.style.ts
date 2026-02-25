import styled from '@emotion/styled';

export const Wrapper = styled.div<{
	direction?: 'row' | 'column';
	gap?: number;
	wrap?: boolean;
	variant?: 'default' | 'naked';
}>`
	display: flex;
	flex-direction: ${(p) => p.direction || 'column'};
	gap: ${(p) => (p.gap !== undefined ? `${p.gap}px` : '8px')};
	flex-wrap: ${(p) => (p.wrap ? 'wrap' : 'nowrap')};
	${(p) =>
		p.variant === 'naked'
			? ''
			: `
		border: 1px solid ${p.theme.colors.gray300};
		border-radius: ${p.theme.borderRadius.md};
		background: ${p.theme.colors.white};
		padding: ${p.theme.spacing(3)};
	`}
`;
