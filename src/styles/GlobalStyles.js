import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: "Karla", serif;
        font-weight: 400;
        background-color: #E0F1E8;
        padding:32px 16px;

        @media screen and (width>=768px) {
            padding: 128px 39px;
        }
        @media screen and (width>=1440px) {
            padding: 128px 352px;
        }
    }

`;
