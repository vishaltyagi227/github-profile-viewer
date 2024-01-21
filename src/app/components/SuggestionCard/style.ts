import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    suggestionCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingInline: theme.spacing(5),
      paddingBlock: theme.spacing(2),
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        flexDirection: 'row',
      },
    },
    cardAvatar: {
      width: theme.pxToRem(80),
      height: theme.pxToRem(80),
    },
    cardActions: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardLink: {
      color: theme.customPallete.secondary.light,
      textDecoration: 'none',
      '&:hover': {
        color: theme.customPallete.primary.main,
      },
    },
    closeBtn: {
      marginLeft: theme.spacing(1),
    },
  })
);

export default useStyles;
