import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: ${props => props.theme.colors.main};
    --primary-light: ${props => props.theme.colors.light};
    --primary-lighter: ${props => props.theme.colors.lighter};
    --navbar: rgba(255, 255, 255, 0.95);
    --text: ${props => props.theme.colors.lightTheme.text};
    --text-highlight: ${props => props.theme.colors.lightTheme.textHighlight};
    --background: ${props => props.theme.colors.lightTheme.background};
    --white: #fff;
    --red: ${props => props.theme.colors.red};
    --shadow-btn: rgba(7, 49, 69, .1);
    --shadow-color: rgba(0, 0, 0, 0.1);
    --shadow-colorDark: rgba(0, 0, 0, 0.25);
    --shadow-colorDarker: rgba(0, 0, 0, 0.4);
  }
  
  html {
    font-size: 62.5%; //1rem = 10px
    box-sizing: border-box;
    line-height: 1.15;

  * {
    outline: none;
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  ::selection {
      background: var(--primary-lighter); /* WebKit/Blink Browsers */
    }

  body {
    font-family: 'Montserrat', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    background-color: var(--background);
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
