import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
  box-sizing: border-box;
}
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
  html {
  scroll-behavior: smooth;
}
  html, 
  body {
    margin: 0;
    padding: 0;
    min-height:100vh;
    width:100%;
    font-family: "Roboto", sans-serif;
     background: #e8eff5;
  }
  
  
`;

export default GlobalStyle;
