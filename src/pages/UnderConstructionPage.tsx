import {} from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border: 1px solid #e0e0e0;
	border-radius: 1rem;
	padding: 1rem;
`;

const Description = styled.div`
	padding: 1rem;
	font-weight: 500;
`;

const DescriptionContents = styled.p`
	color: #777777;
`;

const Box = styled.div`
	border: 1px dashed #c9c9c9;
	border-radius: 0.75rem;
	padding: 1rem;
	background: #fafafa;
`;

export function UnderConstructionPage() {
	return (
		<Wrapper>
			<Description>
				<div>아직 준비 중인 페이지입니다</div>
				<DescriptionContents>
					요청하신 기능을 열심히 만들고 있어요. 곧 만나요!
				</DescriptionContents>
			</Description>
			<Box>
				- 개발 진행 중입니다. 현재 이 경로는 임시 안내만 표시됩니다.
			</Box>
		</Wrapper>
	);
}
