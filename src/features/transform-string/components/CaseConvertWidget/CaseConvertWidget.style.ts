import styled from '@emotion/styled';
import {
	panelContainer,
	descriptionWrapper,
	descriptionTitle,
	descriptionContents,
} from '@shared';

export const Wrapper = styled.div`
	${panelContainer};
`;

export const Description = styled.div`
	${descriptionWrapper};
`;

export const DescriptionTitle = styled.div`
	${descriptionTitle};
`;

export const DescriptionContents = styled.div`
	${descriptionContents};
`;

export const InputSection = styled.div``;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${(p) => p.theme.spacing(4)};
`;

export const Card = styled.div`
	position: relative;
	background: ${(p) => p.theme.colors.white};
	border-radius: ${(p) => p.theme.borderRadius.lg};
	padding: ${(p) => p.theme.spacing(4)};
	border: 1px solid ${(p) => p.theme.colors.gray200};
	box-shadow: ${(p) => p.theme.shadow.sm};
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${(p) => p.theme.spacing(2)};
`;

export const CardTitle = styled.div`
	/* Use medium font weight instead of bold */
	font-weight: 500;
`;

export const Sample = styled.div`
	color: ${(p) => p.theme.colors.gray500};
	font-size: 12px;
`;

export const ResultBox = styled.div`
	background: ${(p) => p.theme.colors.gray100};
	border-radius: ${(p) => p.theme.borderRadius.sm};
	padding: ${(p) => p.theme.spacing(3)};
	color: ${(p) => p.theme.colors.gray800};
	/* keep stable height and show spaces/newlines */
	min-height: 56px;
	white-space: pre-wrap;
	word-break: break-word;
	line-height: 1.5;
`;
