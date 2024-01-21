import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.customPallete.primary.main,
      color: theme.customPallete.secondary.main,
    },
    navContainer: {
      maxWidth: theme.breakpoints.values.xl,
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
);

export default useStyles;
