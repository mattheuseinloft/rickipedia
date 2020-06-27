import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #202329;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  /* h1 {
    font-family: 'Roboto Condensed', 'Roboto', sans-serif;
    font-size: 48px;
  }

  input {
    font-size: 20px;
    font-weight: 400;
  } */

  button {
    cursor: pointer;
    /* font-size: 18px;
    font-weight: 700; */
  }
`;

// Roboto (Bold) 24px = Card Name
// Roboto (Regular) 18px = Card Status & Species

// ---------------------------------------
// Roboto Slab (Regular) 24px = Logo
// Roboto Condensed (Bold) 48px = Title (h1)
// Roboto (Bold) 18px = Button
// Roboto (Regular) 20px = Input
