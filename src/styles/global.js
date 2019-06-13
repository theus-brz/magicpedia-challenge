import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #291429;
    background-image: radial-gradient(#523a51, #291429);
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
