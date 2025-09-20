import React from 'react';
import styled from '@emotion/styled';

interface LetterIconProps {
	letter: string;
}

const IconContainer = styled.div`
	width: 28px;
	height: 28px;
	border-radius: 5px;
	background: linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Letter = styled.span`
	color: white;
	font-size: 14px;
	font-weight: bold;
	font-family: 'GmarketSansTTFBold', sans-serif;
`;

export function LetterIcon({ letter }: LetterIconProps) {
	return (
		<IconContainer>
			<Letter>{letter}</Letter>
		</IconContainer>
	);
}
