import { createGlobalStyle } from 'styled-components';
import { colors } from '../styles/colors';
import { styles } from '../styles/global';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }


  body {
    margin: 0;
    padding: 0;
    background: ${colors.baseBg};
    font-family: ${styles.fonts.fontFamily}, sans-serif;
    min-height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
