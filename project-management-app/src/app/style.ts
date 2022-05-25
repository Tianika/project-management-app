import { createGlobalStyle } from 'styled-components';
import { colors } from '../styles/colors';
import { styles } from '../styles/global';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.baseBg};
    font-family: ${styles.fonts.fontFamily}, sans-serif;
    height: 100%;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyle;
