import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: theme.spacing(14),
      maxWidth: theme.breakpoints.values.xl,
    },
  })
);

export default useStyles;
