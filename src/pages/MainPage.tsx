import { memo, useEffect } from 'react';
import { HeaderComponent } from '../components/@section/header';
import { FooterComponent } from '../components/@section/footer';
import { ContentComponent } from '../components/@section/content/content';
import { useLocation, useNavigate } from 'react-router';

export const MainPage = memo(function MainPage() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('remove_whitespace');
		}
	}, [location]);

	return (
		<>
			<HeaderComponent />
			<ContentComponent />
			<FooterComponent />
		</>
	);
});
