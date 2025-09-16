import styled from '@emotion/styled';

export const Wrapper = styled.div<{
	direction?: 'row' | 'column';
	gap?: number;
	wrap?: boolean;
}>`
	display: flex;
	flex-direction: ${(p) => p.direction || 'column'};
	gap: ${(p) => (p.gap !== undefined ? `${p.gap}px` : '8px')};
	flex-wrap: ${(p) => (p.wrap ? 'wrap' : 'nowrap')};
	border: 1px solid ${(p) => p.theme.colors.gray300};
	border-radius: ${(p) => p.theme.borderRadius.md};
	background: ${(p) => p.theme.colors.white};
	padding: ${(p) => p.theme.spacing(3)};
`;
