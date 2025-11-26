import * as S from './Sidebar.style';
import { NavLink } from 'react-router-dom';
import {
	TextIcon,
	CaseIcon,
	LinkIcon,
	PdfIcon,
	ExcelIcon,
	ImageIcon,
	PaletteIcon,
	CalculatorIcon,
	CalendarIcon,
} from '@shared';

interface SidebarProps {
	onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
	return (
		<S.Sidebar>
			<S.Group>
				<S.GroupTitle>텍스트 도구</S.GroupTitle>
				<NavLink to='/text/clean' onClick={onClose}>
					<S.GroupItem>
						<TextIcon /> 텍스트 정리
					</S.GroupItem>
				</NavLink>
				<NavLink to='/text/case' onClick={onClose}>
					<S.GroupItem>
						<CaseIcon /> 대소문자 변환
					</S.GroupItem>
				</NavLink>
				{/* undeveloped */}
				{/* <S.GroupItem disabled>
					<LinkIcon /> URL 인코딩
				</S.GroupItem> */}
			</S.Group>

			<S.Group>
				<S.GroupTitle>파일 변환</S.GroupTitle>
				<NavLink to='/files/pdf' onClick={onClose}>
					<S.GroupItem>
						<PdfIcon /> PDF 도구
					</S.GroupItem>
				</NavLink>
				{/* undeveloped */}
				{/* <S.GroupItem disabled>
					<ExcelIcon /> 엑셀 도구
				</S.GroupItem>
				<S.GroupItem disabled>
					<ImageIcon /> 이미지 도구
				</S.GroupItem> */}
			</S.Group>

			{/* <S.Group>
				<S.GroupTitle>기타 도구</S.GroupTitle>
				undeveloped
				<S.GroupItem disabled>
					<PaletteIcon /> 색상 도구
				</S.GroupItem>
				<S.GroupItem disabled>
					<CalculatorIcon /> 계산기
				</S.GroupItem>
				<S.GroupItem disabled>
					<CalendarIcon /> 날짜 도구
				</S.GroupItem>
			</S.Group> */}
		</S.Sidebar>
	);
}
