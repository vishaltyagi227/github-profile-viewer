import React, { ReactElement } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@theme/index';

export default (ui: ReactElement): ReactElement => (
  <ThemeProvider theme={theme}>{ui}</ThemeProvider>
);
