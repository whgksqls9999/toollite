import React, { createContext, useContext } from 'react';
import { Toast } from './Toast';
import { useToast } from '../../../hooks/useToast';

interface ToastContextType {
	showToast: (
		message: string,
		type?: 'success' | 'error' | 'info',
		duration?: number
	) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const { toasts, showToast, removeToast } = useToast();

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			{toasts.map((toast) => (
				<Toast
					key={toast.id}
					id={toast.id}
					message={toast.message}
					type={toast.type}
					duration={toast.duration}
					onClose={removeToast}
				/>
			))}
		</ToastContext.Provider>
	);
}

export function useToastContext() {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToastContext must be used within a ToastProvider');
	}
	return context;
}
