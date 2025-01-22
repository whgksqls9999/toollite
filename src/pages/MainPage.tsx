import { memo } from 'react';
import { RemoveWhiteSpaceWidget } from '../components/RemoveWhiteSpace';

export const MainPage = memo(() => {
	return (
		<div>
			<RemoveWhiteSpaceWidget />
		</div>
	);
});
