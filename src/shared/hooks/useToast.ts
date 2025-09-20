import { useState, useCallback } from 'react';

export interface ToastItem {
	id: string;
	message: string;
	type: 'success' | 'error' | 'info';
	duration: number;
}

export function useToast() {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	const showToast = useCallback(
		(
			message: string,
			type: 'success' | 'error' | 'info' = 'success',
			duration: number = 3000
		) => {
			const id = Math.random().toString(36).substr(2, 9);
			const newToast: ToastItem = { id, message, type, duration };

			setToasts((prev) => [...prev, newToast]);
		},
		[]
	);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	return {
		toasts,
		showToast,
		removeToast,
	};
}
