import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: Poppins, Microsoft JhengHei, sans-serif;
    background: #ecf1f4;
    color: var(--text-dark);
    background-color: var(--background) !important;
  }

  a {
    color: var(--text-dark);
  }

  div[class^="Snackbar_snackbar-wrapper"] {
    z-index: 1000;
  }
  
  :root {
    --header-height: 70px;
    --green: #20DB4A;
    --primary: #605fec;
    --light-purple: #f1f1ff;
    --background:#F1F3F3;
    --light-green: #49d27333;
    --red: #EC7987;
    --light-red: #ec798733;
    --btn-green: #B2F0C5;
    --blue: #4DADF3;
    --grey: #DCDAE9;
    --light-grey: #F5F4F9;
    --dark-grey: #77757E;
    --white: #fcfcfc;
    --text-dark: #292535;
  }
`
