import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';
import theme from '~/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
