import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      minWidth: theme.pxToRem(250),
      height: '100vh',
      paddingTop: theme.spacing(2),
      backgroundColor: theme.customPallete.primary.main,
      color: theme.customPallete.secondary.main,
    },
    navItem: {
      marginTop: theme.spacing(1),
    },
    navLink: {
      color: 'inherit',
      '&:hover': {
        backgroundColor: theme.customPallete.primary.light,
      },
    },
    active: {
      backgroundColor: theme.customPallete.primary.light,
    },
    hamburger: {
      color: 'inherit',
    },
  })
);

export default useStyles;
