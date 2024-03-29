import { createGlobalStyle } from 'styled-components';

import { darken } from 'polished';

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

  .flex {
    flex: 1
  }

  .button {
    margin-right: '20px' !important;
    margin-left: '20px' !important;
    color: var(--white-color) !important;
    font-weight: bold;
  }
  .button i {
    margin-right: 10px;
  }

  .orangeButton {
    background-color: var(--orange-color) !important;
  }
  .orangeButton:hover {
    background-color: ${darken(0.2, 'rgb(241, 152, 55)')} !important;
  }

  .greenButton {
    background-color: var(--green-color) !important;
  }
  .greenButton:hover {
    background-color: ${darken(0.2, 'rgb(101, 173, 120)')} !important;
  }

  .redButton {
    background-color: var(--red-color) !important;
  }
  .redButton:hover {
    background-color: ${darken(0.2, 'rgb(211, 108, 103)')} !important;
  }

  .blueButton {
    background-color: var(--blue-color) !important;
  }
  .blueButton:hover {
    background-color: ${darken(0.2, 'rgb(30, 85, 150)')} !important;
  }

  /* .p-10 {
    padding: 10px !important;
  } */

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1201px) {  }

  /* Medium devices (desktops, 993px and up) */
  @media (max-width: 1200px) {  }

  /* Small devices (tablets, 769px and up) */
  @media (max-width: 992px) {
    button {
      margin-bottom: 10px
    }
  }

  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }

    button {
      margin-bottom: 10px;
    }
  }

  .positionSidebar {
    position: relative;
    height: 100%;
    z-index: 8888;
  }

  /* Extra small devices  */
  @media (max-width: 575px) {
    .positionSidebar {
      position: absolute;
    }
  }

`;

export default GlobalStyle;
