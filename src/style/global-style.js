import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  a {
      color: ${({ theme }) => theme.fontColorBase};
  }
`;

export default GlobalStyle;
