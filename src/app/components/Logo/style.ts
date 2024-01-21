import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
      textDecoration: 'none',
    },
    logoText: {
      marginLeft: theme.spacing(2),
    },
  })
);

export default useStyles;
