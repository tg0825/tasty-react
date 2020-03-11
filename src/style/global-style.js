import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
      color: ${({ theme }) => theme.fontColorBase};
  }
`;

export default GlobalStyle;
