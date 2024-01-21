import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileContent: {
      flex: '0 0 100%',
      maxWidth: theme.pxToRem(500),
      boxShadow: theme.shadows[2],
      padding: theme.spacing(5),
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        padding: theme.spacing(1),
      },
    },
    avtarWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlock: theme.spacing(2),
    },
    avatar: {
      width: theme.pxToRem(250),
      height: theme.pxToRem(250),
    },
    userName: {
      fontWeight: 500,
      textAlign: 'center',
      color: theme.customPallete.primary.main,
    },
    bio: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    infoWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: `${theme.spacing(2)} auto`,
    },
    info: {
      display: 'flex',
      alignItems: 'center',
      '&': theme.typography.subtitle2,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    profileBtn: {
      color: theme.customPallete.primary.main,
      backgroundColor: theme.customPallete.primary.light,
      '&:hover': {
        backgroundColor: theme.customPallete.secondary.light,
        color: theme.customPallete.secondary.main,
      },
      '& + &': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export default useStyles;
