import {
	HeaderComponent,
	ContentComponent,
	FooterComponent,
	Container,
} from '@shared';
import { Analytics } from '@vercel/analytics/react';

export function MainPage() {
	return (
		<Container>
			<HeaderComponent />
			<ContentComponent />
			<FooterComponent />
			<Analytics />
		</Container>
	);
}
