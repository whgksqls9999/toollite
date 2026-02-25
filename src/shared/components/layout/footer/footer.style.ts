import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '@style';

export const Wrapper = styled.footer`
	width: 100%;
	min-height: 70px;
	padding: 1rem 1.5rem;
	border-top: 1px solid ${theme.colors.gray200};
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	background: ${theme.colors.gray100};
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	line-height: 1.5;
`;

export const FooterLink = styled(Link)`
	color: ${theme.colors.gray600};
	font-size: ${theme.fontSize.sm};
	line-height: 1.5;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	&:hover {
		color: ${theme.colors.gray800};
		text-decoration: underline;
	}
`;

export const Copyright = styled.span`
	color: ${theme.colors.gray500};
	font-size: ${theme.fontSize.sm};
	line-height: 1.5;
	display: inline-flex;
	align-items: center;
`;
