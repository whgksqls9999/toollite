import styled from '@emotion/styled';
import { panelContainer } from '@shared';

export const Wrapper = styled.div`
	${panelContainer};
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(4)};
	min-height: 40rem;
`;

export const Layout = styled.div`
	display: grid;
	grid-template-columns: 1.3fr 1fr;
	gap: ${(p) => p.theme.spacing(4)};

	${(p) => p.theme.media.down.mobile} {
		grid-template-columns: 1fr;
	}
`;

export const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(3)};
`;

export const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(3)};
`;

export const SectionTitle = styled.div`
	font-size: ${(p) => p.theme.fontSize.sm};
	font-weight: 500;
	color: ${(p) => p.theme.colors.gray700};
`;

export const OptionsCard = styled.div`
	border: 1px solid ${(p) => p.theme.colors.gray300};
	border-radius: ${(p) => p.theme.borderRadius.md};
	padding: ${(p) => p.theme.spacing(3)};
	background: ${(p) => p.theme.colors.white};
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(3)};
`;

export const FieldRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(1)};
`;

export const FieldLabel = styled.label`
	font-size: ${(p) => p.theme.fontSize.sm};
	color: ${(p) => p.theme.colors.gray700};
`;

export const FieldHelp = styled.div`
	font-size: ${(p) => p.theme.fontSize.xs};
	color: ${(p) => p.theme.colors.gray500};
	white-space: pre-line;
`;

export const TextInput = styled.input`
	width: 100%;
	padding: ${(p) => p.theme.spacing(1.5)} ${(p) => p.theme.spacing(2)};
	border-radius: ${(p) => p.theme.borderRadius.sm};
	border: 1px solid ${(p) => p.theme.colors.gray300};
	font-size: ${(p) => p.theme.fontSize.sm};

	&:focus {
		outline: none;
		border-color: ${(p) => p.theme.colors.primary};
		box-shadow: 0 0 0 1px ${(p) => p.theme.colors.primary}33;
	}
`;

export const NumberInput = styled.input`
	width: 120px;
	padding: ${(p) => p.theme.spacing(1.5)} ${(p) => p.theme.spacing(2)};
	border-radius: ${(p) => p.theme.borderRadius.sm};
	border: 1px solid ${(p) => p.theme.colors.gray300};
	font-size: ${(p) => p.theme.fontSize.sm};

	&:focus {
		outline: none;
		border-color: ${(p) => p.theme.colors.primary};
		box-shadow: 0 0 0 1px ${(p) => p.theme.colors.primary}33;
	}
`;

export const RadioRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${(p) => p.theme.spacing(2)};
`;

export const RadioLabel = styled.label`
	display: inline-flex;
	align-items: center;
	gap: ${(p) => p.theme.spacing(1)};
	padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(2)};
	border-radius: ${(p) => p.theme.borderRadius.round};
	border: 1px solid ${(p) => p.theme.colors.gray300};
	font-size: ${(p) => p.theme.fontSize.sm};
	cursor: pointer;

	input {
		cursor: pointer;
	}
`;

export const ErrorText = styled.div`
	color: ${(p) => p.theme.colors.danger};
	font-size: ${(p) => p.theme.fontSize.xs};
`;

export const ResultList = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(1.5)};
	font-size: ${(p) => p.theme.fontSize.sm};
	color: ${(p) => p.theme.colors.gray700};
`;

export const ResultItem = styled.div`
	padding: ${(p) => p.theme.spacing(1.5)} ${(p) => p.theme.spacing(2)};
	border-radius: ${(p) => p.theme.borderRadius.sm};
	border: 1px solid ${(p) => p.theme.colors.gray200};
	background: ${(p) => p.theme.colors.gray50};
	display: flex;
	justify-content: space-between;
	gap: ${(p) => p.theme.spacing(2)};
`;

export const ResultName = styled.span`
	font-weight: 500;
`;

export const ResultPages = styled.span`
	color: ${(p) => p.theme.colors.gray600};
`;

export const ActionsRow = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: auto;
`;

