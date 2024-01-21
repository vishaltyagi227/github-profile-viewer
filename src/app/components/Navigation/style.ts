import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navList: {
      display: 'flex',
    },
    navItem: {
      listStyle: 'none',
      marginLeft: theme.spacing(2),
    },
    navLink: {
      color: 'inherit',
      '&:hover': {
        backgroundColor: theme.customPallete.primary.light,
      },
    },
    active: {
      backgroundColor: theme.customPallete.primary.light,
    },
  })
);

export default useStyles;
