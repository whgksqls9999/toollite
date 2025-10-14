// Sidebar.style.ts
import styled from '@emotion/styled';

export const Sidebar = styled.div`
	padding: 16px;
	a {
		text-decoration: none;
		color: inherit;
	}
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

export const GroupItem = styled.div<{ disabled?: boolean }>`
	padding: 8px 12px;
	font-size: 16px;
	color: #333;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	border-radius: 6px;
	display: flex;
	align-items: center;
	gap: 8px;

	background-color: ${({ disabled }) =>
		disabled ? '#f2f2f2' : 'transparent'};
	opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

	&:hover {
		background-color: ${({ disabled }) =>
			disabled ? '#f2f2f2' : '#e0e0e0'};
	}
`;
