import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notFoundContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      maxWidth: theme.breakpoints.values.xl,
    },
    notFoundWrapper: {
      width: '100%',
      textAlign: 'center',
    },
    notFoundIcon: {
      '&': theme.typography.h3,
      marginRight: theme.spacing(2),
    },
  })
);

export default useStyles;
