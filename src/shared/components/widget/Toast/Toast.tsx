import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './Toast.style';

export interface ToastProps {
	id: string;
	message: string;
	type?: 'success' | 'error' | 'info';
	duration?: number;
	onClose: (id: string) => void;
}

export function Toast({
	id,
	message,
	type = 'success',
	duration = 2000, // 2초로 변경
	onClose,
}: ToastProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const showTimer = setTimeout(() => setIsVisible(true), 10);

		const closeTimer = setTimeout(() => {
			setIsVisible(false);
			setTimeout(() => onClose(id), 300);
		}, duration);

		return () => {
			clearTimeout(showTimer);
			clearTimeout(closeTimer);
		};
	}, [id, duration, onClose]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(() => onClose(id), 300);
	};

	return createPortal(
		<S.ToastContainer
			$isVisible={isVisible}
			$type={type}
			data-visible={isVisible}
		>
			<S.ToastContent $type={type}>
				<S.ToastMessage>{message}</S.ToastMessage>
				<S.CloseButton onClick={handleClose}>×</S.CloseButton>
			</S.ToastContent>
		</S.ToastContainer>,
		document.body
	);
}
