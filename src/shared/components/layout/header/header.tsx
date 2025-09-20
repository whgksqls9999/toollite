import { Link } from 'react-router-dom';
import { LetterIcon } from '../../host';
import * as S from './header.style';

export function HeaderComponent() {
	return (
		<S.Wrapper>
			<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
				<S.TitleContainer>
					<LetterIcon letter='T' />
					<span>Toollite</span>
				</S.TitleContainer>
			</Link>
		</S.Wrapper>
	);
}
