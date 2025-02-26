import { memo, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router';
import {
	HeaderComponent,
	ContentComponent,
	FooterComponent,
	Container,
} from '../components/@section';
import { Analytics } from '@vercel/analytics/react';

export const MainPage = memo(function MainPage() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('remove_whitespace');
		}
	}, [location]);

	return (
		<Container>
			<HeaderComponent />
			<ContentComponent />
			<FooterComponent />
			<Analytics />
		</Container>
	);
});
