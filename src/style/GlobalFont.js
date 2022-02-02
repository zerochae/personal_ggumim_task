import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeo from "./SpoqaHanSansNeo-Regular.ttf";

const GlobalFont = createGlobalStyle`

  @font-face{
      font-family: "Spoqa Han Sans";
      src: url(${SpoqaHanSansNeo});
      font-style: normal;
    }

  body { font-family: 'Spoqa Han Sans'; }

`;

export default GlobalFont;
