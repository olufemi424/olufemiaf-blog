import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: ${props => props.theme.colors.main};
    --primary-light: ${props => props.theme.colors.light};
    --primary-lighter: ${props => props.theme.colors.lighter};
    --secondary: ${props => props.theme.colors.secondary};
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
    font-family: 'Nunito', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    background-color: var(--background);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'radnika', sans-serif;
    font-weight: normal;
    line-height: 1.2;
  }

  p {
    line-height: 1.77777777777777776777777777;
    font-weight: 400;
  }

  p a:nth-child(4n+1) { --rotate: -2deg; }
  p a:nth-child(4n+2) { --rotate: 1.64deg; }
  p a:nth-child(4n+3) { --rotate: 0.6deg; }
  p a:nth-child(4n+4) { --rotate: -0.75deg; }

  :not(pre) > code {
    background: #f6f6f6;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 0 3.5px;
  }

  code, kbd, samp {
    font-family: 'Operator mono';
    font-weight: 300;
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
