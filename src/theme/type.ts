interface ICustomTheme {
  customPallete: {
    primary: {
      main: string;
      light: string;
    };
    secondary: {
      main: string;
      light: string;
    };
  };
  spacing: (factor: number) => string;
  pxToRem: (px: number) => string;
}

declare module '@mui/material/styles' {
  interface Theme extends ICustomTheme {}
  interface ThemeOptions extends Partial<ICustomTheme> {}
}

export default {};
