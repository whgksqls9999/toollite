import { createPortal } from 'react-dom';

interface floatMessage {}

export class ViewerUtil {
	static floatMessage({}: floatMessage) {
		createPortal(
			<div>크리에이트 포탈!~~</div>,
			document.querySelector('body')!
		);
	}
}
