import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: "Roboto", sans-serif;
  }
   *, *:before, *:after {
  box-sizing: border-box;
} 
`;

export default GlobalStyle;
