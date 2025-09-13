import styled from '@emotion/styled';

export const IconButton = styled.button`
	width: 32px;
	height: 32px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: ${(p) => p.theme.colors.white};
	border: 1px solid ${(p) => p.theme.colors.gray300};
	border-radius: ${(p) => p.theme.borderRadius.md};
	cursor: pointer;
	transition: background 0.2s ease, border-color 0.2s ease;
	color: ${(p) => p.theme.colors.gray600};
	&:hover {
		background: ${(p) => p.theme.colors.gray100};
		border-color: ${(p) => p.theme.colors.gray400};
	}
`;
