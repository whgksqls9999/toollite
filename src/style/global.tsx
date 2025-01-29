/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
	<Global
		styles={css`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
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
