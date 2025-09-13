import * as S from './Sidebar.style';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
	return (
		<S.Sidebar>
			<S.Group>
				<S.GroupTitle>텍스트 도구</S.GroupTitle>
				<S.GroupItem>
					<NavLink to='/text/clean'>텍스트 정리</NavLink>
				</S.GroupItem>
				<S.GroupItem>
					<NavLink to='/text/case'>대소문자 변환</NavLink>
				</S.GroupItem>
				<S.GroupItem>
					<NavLink to='/text/url'>URL 인코딩</NavLink>
				</S.GroupItem>
			</S.Group>

			<S.Group>
				<S.GroupTitle>파일 변환</S.GroupTitle>
				<S.GroupItem>
					<NavLink to='/files/pdf'>PDF 도구</NavLink>
				</S.GroupItem>
				<S.GroupItem>
					<NavLink to='/files/excel'>엑셀 도구</NavLink>
				</S.GroupItem>
				<S.GroupItem>
					<NavLink to='/files/image'>이미지 도구</NavLink>
				</S.GroupItem>
			</S.Group>

			<S.Group>
				<S.GroupTitle>기타 도구</S.GroupTitle>
				<S.GroupItem>
					<NavLink to='/misc/colors'>색상 도구</NavLink>
				</S.GroupItem>
				<S.GroupItem>
					<NavLink to='/misc/calc'>계산기</NavLink>
				</S.GroupItem>
				<S.GroupItem>
					<NavLink to='/misc/date'>날짜 도구</NavLink>
				</S.GroupItem>
			</S.Group>
		</S.Sidebar>
	);
}
