import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, 
  body {
    margin: 0;
    padding: 0;
    min-height:100vh;
    width:100vw;
    font-family: "Roboto", sans-serif;
     background: #e8eff5;
  }
   *, *:before, *:after {
  box-sizing: border-box;
} 
`;

export default GlobalStyle;
