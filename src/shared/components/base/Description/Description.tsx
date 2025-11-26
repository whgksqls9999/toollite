import { FC, PropsWithChildren } from 'react';
import * as S from './Description.style';

interface DescriptionComponent extends FC<PropsWithChildren> {
	Title: FC<PropsWithChildren>;
	Contents: FC<PropsWithChildren>;
}

const DescriptionRoot: DescriptionComponent = ({ children }) => {
	return <S.DescriptionRoot>{children}</S.DescriptionRoot>;
};

const DescriptionTitle: FC<PropsWithChildren> = ({ children }) => {
	return <S.DescriptionTitle>{children}</S.DescriptionTitle>;
};

const DescriptionContents: FC<PropsWithChildren> = ({ children }) => {
	return <S.DescriptionContents>{children}</S.DescriptionContents>;
};

DescriptionRoot.Title = DescriptionTitle;
DescriptionRoot.Contents = DescriptionContents;

export const Description = DescriptionRoot;
