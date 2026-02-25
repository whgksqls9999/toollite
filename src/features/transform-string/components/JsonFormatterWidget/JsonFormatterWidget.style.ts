import styled from '@emotion/styled';
import { panelContainer } from '@shared';

export const Wrapper = styled.div`
	${panelContainer};
	height: 40rem;
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(4)};
`;

/** 옵션 전체를 하나의 상자로 묶어 시각적 과부하 완화 */
export const OptionsPanel = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(3)};
	border: 1px solid ${(p) => p.theme.colors.gray300};
	border-radius: ${(p) => p.theme.borderRadius.md};
	background: ${(p) => p.theme.colors.white};
	padding: ${(p) => p.theme.spacing(3)};
`;

export const OptionsRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: ${(p) => p.theme.spacing(4)};
	align-items: center;
`;

export const OptionsGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${(p) => p.theme.spacing(2)};
	align-items: center;
`;

export const OptionLabel = styled.span`
	font-size: ${(p) => p.theme.fontSize.sm};
	color: ${(p) => p.theme.colors.gray600};
	min-width: ${(p) => p.theme.spacing(12)};
`;

/** TextToText를 감싸서 남은 세로 공간을 채우고, 내부 textarea 영역이 flex로 안정 동작하도록 */
export const TextAreaSection = styled.div`
	flex: 1;
	min-height: 0;
	display: flex;
	flex-direction: column;

	& > div:first-of-type {
		flex: 1;
		min-height: 0;
	}
`;

export const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: ${(p) => p.theme.spacing(2)};
	cursor: pointer;
	font-size: ${(p) => p.theme.fontSize.sm};
	color: ${(p) => p.theme.colors.gray700};
`;

/** 라디오 그룹과 톤을 맞춘 체크박스 (테마 border/padding) */
export const CheckboxInput = styled.input`
	width: 18px;
	height: 18px;
	accent-color: ${(p) => p.theme.colors.primary};
	cursor: pointer;
`;

export const ErrorMessage = styled.div`
	margin-top: ${(p) => p.theme.spacing(2)};
	font-size: ${(p) => p.theme.fontSize.sm};
	color: ${(p) => p.theme.colors.danger};
	white-space: pre-wrap;
`;
