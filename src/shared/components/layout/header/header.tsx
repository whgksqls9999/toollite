import { Link } from 'react-router-dom';
import * as S from './header.style';

export function HeaderComponent() {
	return (
		<S.Wrapper>
			<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
				Toollite
			</Link>
		</S.Wrapper>
	);
}
