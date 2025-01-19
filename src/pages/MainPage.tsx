import { memo } from 'react';
import { Button, TextWorkspace } from '../components';
import { ENUM_BUTTON_TYPE, ENUM_MENU_TYPE } from '../enum/common';
import { Textarea } from '../components/@base/Textarea';
import { RemoveWhiteSpaceWidget } from '../components/RemoveWhiteSpacePage';

export const MainPage = memo(() => {
	return (
		<div>
			MainPage
			<RemoveWhiteSpaceWidget />
		</div>
	);
});
