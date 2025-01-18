import { memo } from 'react';
import { Button } from '../components';
import { ENUM_BUTTON_TYPE, ENUM_MENU_TYPE } from '../enum/common';

export const MainPage = memo(() => {
	const menu_type = ENUM_MENU_TYPE.MAIN;
	const state = {
		color: 'white',
		background_color: 'red',
		display_value: '하이',
	};

	return (
		<div>
			MainPage
			<Button
				onClick={() => {
					alert('하이');
				}}
				state={state}
				Icon='123'
			/>
		</div>
	);
});
