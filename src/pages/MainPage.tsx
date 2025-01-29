import { memo } from 'react';

import { Outlet } from 'react-router';
import { HeaderComponent } from '../components/@section/header';

export const MainPage = memo(function MainPage() {
	return (
		<>
			<HeaderComponent />
			<ContentComponent />
			<FooterComponent />
		</>
	);
});

const ContentComponent = memo(function ContentComponent() {
	return (
		<div>
			<Outlet />
		</div>
	);
});

const FooterComponent = memo(function FooterComponent() {
	return <div></div>;
});
