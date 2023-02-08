import { createGlobalStyle } from "styled-components";

import "./styles.css";
import bgImg from "../../images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        color: #333;
        padding: 0;
        margin: 0;
        font-family: 'New Tegomin', serif;
        background: url(${bgImg}) center/cover no-repeat;
        box-sizing: border-box;
    }
`;
