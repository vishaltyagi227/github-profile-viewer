import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeIcon: {
      color: 'inherit',
    },
    alertWrapper: {
      width: '100%',
    },
    alert: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default useStyles;
