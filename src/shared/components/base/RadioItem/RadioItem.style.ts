import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const RadioItemWrapper = styled.label<{ checked?: boolean }>`
	cursor: pointer;
	width: 100%;
	white-space: nowrap;
	border-radius: ${(p) => p.theme.borderRadius.sm};
	padding: ${(p) => p.theme.spacing(2)} ${(p) => p.theme.spacing(3)};
	background: ${(p) => p.theme.colors.white};

	display: flex;
	align-items: center;
	gap: ${(p) => p.theme.spacing(2)};

	transition: background 0.15s ease;

	&:hover {
		background: ${(p) => p.theme.colors.gray100};
	}

	${(p) =>
		p.checked &&
		css`
			background: ${p.theme.colors.gray100};
		`}
`;
