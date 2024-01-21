import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '90vh',
      maxWidth: theme.breakpoints.values.xl,
    },
    searchHeading: {
      marginBlock: theme.spacing(2),
    },
    searchWrapper: {
      marginTop: theme.spacing(7),
      padding: theme.spacing(5),
      maxWidth: theme.pxToRem(1200),
      width: '100%',
    },
    loadinWrapper: {
      flexGrow: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suggestionWrapper: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    suggestionContainer: {
      width: '100%',
      maxWidth: theme.pxToRem(1200),
      maxHeight: '60vh',
      paddingBlock: theme.spacing(3),
      overflow: 'auto',
    },
  })
);

export default useStyles;
