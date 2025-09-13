import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router';
import {
	HeaderComponent,
	ContentComponent,
	FooterComponent,
	Container,
} from '@shared';
import { Analytics } from '@vercel/analytics/react';

export function MainPage() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/text/clean');
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
}
