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

			body {
				display: flex;
				align-items: center;
				justify-content: center;

				width: 100vw;
				height: 100vh;
			}

			div#root {
				width: 100%;
				height: 100%;
			}
		`}
	/>
);
