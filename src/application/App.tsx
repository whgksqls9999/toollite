import { memo } from 'react';
import { Route, Routes } from 'react-router';
import { MainPage, RemoveWhiteSpacePage } from '../pages';
import { BrowserRouter } from 'react-router-dom';

export const App = memo(() => {
	// execution_context 관리
	// const { execution_context } = setupExecutionContext();

	// window에 추가할 항목
	// state에 따라 변하지 않는 항목의 생성 및 등록

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route
					path='/remove_whitespace'
					element={<RemoveWhiteSpacePage />}
				/>
			</Routes>
		</BrowserRouter>
	);
});

// function setupExecutionContext() {
// 	const execution_context = {};

// 	// 사용자 정보(브라우저, 아이피, 접속자 정보)
// 	// 유틸성 정보

// 	return { execution_context };
// }
