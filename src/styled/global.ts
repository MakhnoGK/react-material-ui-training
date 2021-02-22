import { createGlobalStyle } from 'styled-components';
import { colors } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.grey[100]}
  }
`;

export default GlobalStyle;
