import * as S from './Sidebar.style';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
	return (
		<S.Sidebar>
			<S.Group>
				<S.GroupTitle>텍스트 도구</S.GroupTitle>
				<NavLink to='/text/clean'>
					<S.GroupItem>텍스트 정리</S.GroupItem>
				</NavLink>
				<NavLink to='/text/case'>
					<S.GroupItem>대소문자 변환</S.GroupItem>
				</NavLink>
				<NavLink to='/text/url'>
					<S.GroupItem>URL 인코딩</S.GroupItem>
				</NavLink>
			</S.Group>

			<S.Group>
				<S.GroupTitle>파일 변환</S.GroupTitle>
				<NavLink to='/files/pdf'>
					<S.GroupItem>PDF 도구</S.GroupItem>
				</NavLink>
				<NavLink to='/files/excel'>
					<S.GroupItem>엑셀 도구</S.GroupItem>
				</NavLink>
				<NavLink to='/files/image'>
					<S.GroupItem>이미지 도구</S.GroupItem>
				</NavLink>
			</S.Group>

			<S.Group>
				<S.GroupTitle>기타 도구</S.GroupTitle>
				<NavLink to='/misc/colors'>
					<S.GroupItem>색상 도구</S.GroupItem>
				</NavLink>
				<NavLink to='/misc/calc'>
					<S.GroupItem>계산기</S.GroupItem>
				</NavLink>
				<NavLink to='/misc/date'>
					<S.GroupItem>날짜 도구</S.GroupItem>
				</NavLink>
			</S.Group>
		</S.Sidebar>
	);
}
