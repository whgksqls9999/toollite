import { useCallback, useRef } from 'react';

export const useDebounce = (callbackFn: (param?: any) => any, delay = 500) => {
	let timer = useRef<any>(null);

	return useCallback(() => {
		if (timer.current) clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			callbackFn();
		}, delay);
	}, [delay, callbackFn]);
};
