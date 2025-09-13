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
							path='/text/clean'
							element={<RemoveWhiteSpacePage />}
						/>
						{/* placeholders for upcoming tools */}
						<Route path='/text/case' element={<div />} />
						<Route path='/text/url' element={<div />} />
						<Route path='/files/pdf' element={<div />} />
						<Route path='/files/excel' element={<div />} />
						<Route path='/files/image' element={<div />} />
						<Route path='/misc/colors' element={<div />} />
						<Route path='/misc/calc' element={<div />} />
						<Route path='/misc/date' element={<div />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}
