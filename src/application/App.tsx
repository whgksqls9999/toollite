import {} from 'react';
import { Route, Routes } from 'react-router';
import { MainPage, RemoveWhiteSpacePage } from '../pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../style/theme';
import { GlobalStyles } from '../style';

export function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<MainPage />}>
						<Route
							path='/remove_whitespace'
							element={<RemoveWhiteSpacePage />}
						/>
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}
