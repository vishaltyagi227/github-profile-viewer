import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.customPallete.secondary.main,
      backgroundColor: theme.customPallete.primary.main,
      marginTop: theme.spacing(5),
      paddingBlock: theme.spacing(1),
      '&:hover': {
        backgroundColor: theme.customPallete.secondary.light,
      },
    },
  })
);

export default useStyles;
