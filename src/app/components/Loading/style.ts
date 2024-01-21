import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      color: theme.customPallete.primary.main,
    },
  })
);

export default useStyles;
