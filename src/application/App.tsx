import { Route, Routes } from 'react-router';
import {
	MainPage,
	MainLayout,
	RemoveWhiteSpacePage,
	CaseConvertPage,
	UnderConstructionPage,
	PdfToolsPage,
} from '../pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../style/theme';
import { GlobalStyles } from '../style';
import { ToastProvider } from '@shared';
import { HelmetProvider } from 'react-helmet-async';

export function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<ToastProvider>
						<Routes>
							<Route path='/' element={<MainLayout />}>
								<Route index element={<MainPage />} />
								<Route
									path='/text/clean'
									element={<RemoveWhiteSpacePage />}
								/>
								<Route
									path='/text/case'
									element={<CaseConvertPage />}
								/>
								{/* placeholders for upcoming tools */}
								<Route
									path='/text/url'
									element={<UnderConstructionPage />}
								/>
								<Route
									path='/files/pdf'
									element={<PdfToolsPage />}
								/>
								<Route
									path='/files/excel'
									element={<UnderConstructionPage />}
								/>
								<Route
									path='/files/image'
									element={<UnderConstructionPage />}
								/>
								<Route
									path='/misc/colors'
									element={<UnderConstructionPage />}
								/>
								<Route
									path='/misc/calc'
									element={<UnderConstructionPage />}
								/>
								<Route
									path='/misc/date'
									element={<UnderConstructionPage />}
								/>
							</Route>
						</Routes>
					</ToastProvider>
				</ThemeProvider>
			</BrowserRouter>
		</HelmetProvider>
	);
}
