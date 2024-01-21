import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const BASE_FACTOR_FOR_SPACING_VALUE = 0.5;
const ONE_PIXEL_EQUAL_TO_REM = 0.0625;
const COLOR = {
  black: '#242424',
  white: '#fff',
  whiteTransparent20: 'rgba(255, 255, 255, 0.2)',
  emperor: '#505050',
};

const customTheme = createTheme({
  customPallete: {
    primary: {
      main: COLOR.black,
      light: COLOR.whiteTransparent20,
    },
    secondary: {
      main: COLOR.white,
      light: COLOR.emperor,
    },
  },
  spacing: (factor: number) => `${BASE_FACTOR_FOR_SPACING_VALUE * factor}rem`,
  pxToRem: (px: number) => `${ONE_PIXEL_EQUAL_TO_REM * px}rem`,
});

const theme = responsiveFontSizes(customTheme);

export default theme;
