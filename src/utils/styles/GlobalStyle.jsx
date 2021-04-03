import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@media (max-width: 1000px) {
   html {
     font-size:13px;

   }
  }
   @media (max-width: 800px) {
   html {
     font-size:10px;
     
   }
  }
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
