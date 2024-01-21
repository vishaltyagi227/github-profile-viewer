import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      maxWidth: theme.breakpoints.values.xl,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'inherit',
      marginTop: theme.spacing(14),
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: theme.shadows[2],
      maxWidth: theme.pxToRem(500),
      width: '100%',
      paddingInline: theme.spacing(4),
      paddingBlock: theme.spacing(6),
    },
    heading: {
      color: theme.customPallete.primary.main,
      fontWeight: 500,
    },
    progress: {
      color: theme.customPallete.secondary.main,
    },
  })
);

export default useStyles;
