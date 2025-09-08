import { memo } from 'react';
import { RemoveWhiteSpaceWidget } from '@features/remove-white-space';
import { ViewerUtil } from '../utils';

export const RemoveWhiteSpacePage = memo(() => {
	ViewerUtil.floatMessage({});
	return <RemoveWhiteSpaceWidget />;
});
