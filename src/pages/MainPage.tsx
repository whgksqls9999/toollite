import { memo, useEffect } from 'react';
import { HeaderComponent } from '../components/@section/header';
import { FooterComponent } from '../components/@section/footer';
import { ContentComponent } from '../components/@section/content/content';
import { useNavigate } from 'react-router';

export const MainPage = memo(function MainPage() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('remove_whitespace');
	}, []);

	return (
		<>
			<HeaderComponent />
			<ContentComponent />
			<FooterComponent />
		</>
	);
});
