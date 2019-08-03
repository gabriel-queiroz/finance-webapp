import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.css';

const globalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
export default globalStyle;
