import { useCallback } from 'react';
import { BaseProps } from '@shared';

export interface LabelProps extends BaseProps {
	onClick?: (param?: any) => any;
	display_value?: string;
}

export function Label(props: LabelProps) {
	const { display_value } = props;

	const onClick = useCallback(() => {
		props.onClick?.();
	}, [props.onClick]);

	return <div onClick={onClick}>{display_value}</div>;
}
