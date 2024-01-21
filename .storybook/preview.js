import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '@theme/index';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme= {theme}>
      <Story />
    </ThemeProvider>
    </StyledEngineProvider>
  ),
];
