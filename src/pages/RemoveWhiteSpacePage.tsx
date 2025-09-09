import { memo } from 'react';
import { RemoveWhiteSpaceWidget } from '@features/transform-string';
import { ViewerUtil } from '../utils';

export const RemoveWhiteSpacePage = memo(() => {
	ViewerUtil.floatMessage({});
	return <RemoveWhiteSpaceWidget />;
});
