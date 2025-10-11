import styled from '@emotion/styled';
import { theme } from '@style';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(4)};
`;

export const FileSummary = styled.div`
	font-size: 0.875rem;
	color: ${theme.colors.gray600};
	padding: ${theme.spacing(3)} ${theme.spacing(4)};
	background-color: ${theme.colors.gray100};
	border-radius: ${theme.borderRadius.sm};
	border: 1px solid ${theme.colors.gray300};
`;

export const FileList = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${theme.spacing(2)};
	overflow-x: auto;
	overscroll-behavior-x: contain;
`;

export const FileItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${theme.spacing(2)};
	padding: ${theme.spacing(3)};
	background-color: ${theme.colors.white};
	border: 1px solid ${theme.colors.gray300};
	border-radius: ${theme.borderRadius.sm};
	transition: all 0.2s ease;
	cursor: grab;
	flex: 0 0 auto;
	width: 120px;
	min-height: 140px;

	&:hover {
		background-color: ${theme.colors.gray100};
		border-color: ${theme.colors.primary};
	}

	&:active {
		cursor: grabbing;
	}
`;

export const DragHandle = styled.div`
	color: ${theme.colors.gray500};
	font-size: 0.875rem;
	font-weight: bold;
	cursor: grab;
	user-select: none;
	align-self: flex-start;

	&:active {
		cursor: grabbing;
	}
`;

export const Thumb = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${theme.colors.gray100};
	border: 1px solid ${theme.colors.gray300};
	border-radius: 4px;
	overflow: hidden;
	flex-shrink: 0;
`;

export const ThumbImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ThumbPdf = styled.div`
	font-size: 0.75rem;
	font-weight: 600;
	color: ${theme.colors.gray600};
`;

export const FileName = styled.div`
	font-size: 0.75rem;
	color: ${theme.colors.gray800};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	width: 100%;
`;
