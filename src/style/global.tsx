/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
	<Global
		styles={css`
			@font-face {
				font-family: 'GmarketSansLight';
				src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff')
					format('woff');
			}
			@font-face {
				font-family: 'GmarketSansMedium';
				src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
					format('woff');
			}
			@font-face {
				font-family: 'GmarketSansBold';
				src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff')
					format('woff');
			}

			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				font-family: 'GmarketSansMedium';
			}

			a {
				text-decoration: none;
				color: inherit;
			}

			a:hover,
			a:visited,
			a:focus,
			a:active {
				text-decoration: none;
			}

			body {
				min-height: 100vh;
				width: 100%;
				/* 항상 스크롤바 영역을 확보해서 레이아웃 시프트를 방지 */
				overflow-y: scroll;
				/* 지원 브라우저에서 스크롤바 공간을 안정적으로 유지 */
				scrollbar-gutter: stable both-edges;
			}

			div#root {
				width: 100%;
				min-height: 100%;
			}
		`}
	/>
);
