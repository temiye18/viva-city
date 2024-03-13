import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
     --white: #fff;
    --black: #000;
    --black-one:#020203;
    --primary-color:  #f4d5d5;
    --primary-light: #F6C1C1;
    --secondary-color: #E44444;
}

   html,
   html *,
   html *::before,
   html *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }

 

   body {
    font-size: 1rem;
   font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--black-one);
    
   }

   ul {
      list-style: none;
   }

     a {
      text-decoration: none;
   }

`;

export default GlobalStyles;
