import React from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';
import theme from '~/config/theme';
import i18n from '~/config/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <Routes />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
