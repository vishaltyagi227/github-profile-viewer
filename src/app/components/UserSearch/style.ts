import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchWrapper: {
      padding: theme.spacing(5),
    },
    searchInput: {
      marginBlock: theme.spacing(3),
      width: '100%',
    },
  })
);

export default useStyles;
