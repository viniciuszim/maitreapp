import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: var(--primary-color);
    font-family: 'Montserrat', sans-serif;
  }

  .greenButton {
    width: 300px;
    background: var(--green-color);
    padding-left: 20px;
    padding-right: 20px;
    color: var(--white-color);
    font-weight: bold;
    font-size: 14px;
    border: 0;

    i {
      font-size: 14px;
      margin-right: 10px;
    }
  }

  .redButton {
    width: 300px;
    background: var(--red-color);
    padding-left: 20px;
    padding-right: 20px;
    color: var(--white-color);
    font-weight: bold;
    font-size: 14px;
    border: 0;

    i {
      font-size: 14px;
      margin-right: 10px;
    }
  }

`;

export default GlobalStyle;
