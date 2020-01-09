import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('${({ theme }) => theme.googleFontUrl}');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  body {
    background-color: ${({ theme }) => theme.colors.white};;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${({ theme }) => theme.fonts.join(',')};
    font-weight: ${({ theme }) => theme.fontWeigth};
  }
`;
