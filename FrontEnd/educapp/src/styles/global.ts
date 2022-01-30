import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --preto: #000000;
    --azul_principal: #1B76E0;
    --azul_escuro: #090E2C;
    --branco: #FFFFFF;
    --cinza_escuro: #393939;
    --cinza_claro: #C4C4C4;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Sora', sans-serif;
    weight: 300;
    background-color: var(--preto);
  }
`

export default GlobalStyles
