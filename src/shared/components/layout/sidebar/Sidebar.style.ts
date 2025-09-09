// Sidebar.style.ts
import styled from '@emotion/styled';

export const Sidebar = styled.div`
	padding: 16px;
`;

export const Group = styled.div`
	padding-bottom: 1rem;
	border-bottom: 1px solid #e0e0e0;
`;

export const GroupTitle = styled.div`
	font-size: 14px;
	color: #999;
	margin-bottom: 8px;
`;

export const GroupItem = styled.div`
	padding: 8px 12px;
	font-size: 16px;
	color: #333;
	cursor: pointer;
	border-radius: 6px;
	display: flex;
	align-items: center;
	gap: 8px;

	&:hover {
		background-color: #e0e0e0;
	}
`;
