/**
 * @TODO 메뉴들 외부에서 주입하기
 */

import * as S from './Sidebar.style';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextIcon, CaseIcon, PdfIcon, HashIcon } from '@shared';

interface SidebarProps {
	onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
	const { t } = useTranslation();

	return (
		<S.Sidebar>
			<S.Group>
				<S.GroupTitle>{t('layout.sidebar.textTools')}</S.GroupTitle>
				<NavLink to='/text/clean' onClick={onClose}>
					<S.GroupItem>
						<TextIcon /> {t('layout.sidebar.textClean')}
					</S.GroupItem>
				</NavLink>
				<NavLink to='/text/case' onClick={onClose}>
					<S.GroupItem>
						<CaseIcon /> {t('layout.sidebar.textCase')}
					</S.GroupItem>
				</NavLink>
				<NavLink to='/text/json' onClick={onClose}>
					<S.GroupItem>
						<HashIcon /> {t('layout.sidebar.textJsonFormatter')}
					</S.GroupItem>
				</NavLink>
				{/* undeveloped */}
				{/* <S.GroupItem disabled>
					<LinkIcon /> URL 인코딩
				</S.GroupItem> */}
			</S.Group>

			<S.Group>
				<S.GroupTitle>{t('layout.sidebar.fileTools')}</S.GroupTitle>
				<NavLink to='/files/pdf' onClick={onClose}>
					<S.GroupItem>
						<PdfIcon /> {t('layout.sidebar.filePdfTools')}
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
