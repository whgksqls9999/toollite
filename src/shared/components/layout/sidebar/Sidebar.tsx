import * as S from './Sidebar.style';

export function Sidebar() {
	return (
		<S.Sidebar>
			<S.Group>
				<S.GroupTitle>텍스트 도구</S.GroupTitle>
				<S.GroupItem>텍스트 정리</S.GroupItem>
				<S.GroupItem>대소문자 변환</S.GroupItem>
				<S.GroupItem>URL 인코딩</S.GroupItem>
			</S.Group>
		</S.Sidebar>
	);
}
