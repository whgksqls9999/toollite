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
				display: flex;
				align-items: center;
				justify-content: center;
				min-height: 100vh;
				width: 100%;
				overflow-y: auto;
				/* Reserve space for scrollbar when present to avoid layout shift (Chrome/Edge) */
				scrollbar-gutter: stable both-edges;
			}

			div#root {
				width: 100%;
				min-height: 100%;
			}
		`}
	/>
);
