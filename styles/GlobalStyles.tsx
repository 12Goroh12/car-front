import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        a {
        color: inherit;
        text-decoration: none;
        }
        * {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
        ul {
          list-style: none;
        }
`;
