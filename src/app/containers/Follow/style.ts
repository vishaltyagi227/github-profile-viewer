import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    followContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '90vh',
      maxWidth: theme.breakpoints.values.xl,
    },
    followWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing(14),
      padding: theme.spacing(5),
      maxWidth: theme.pxToRem(800),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    },
    followHeading: {
      fontWeight: 500,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        margin: 0,
      },
    },
    followCardWrapper: {
      marginTop: theme.spacing(5),
      maxWidth: theme.pxToRem(800),
      width: '100%',
      position: 'relative',
    },
    refreshBtn: {
      color: theme.customPallete.secondary.light,
      border: `1px solid ${theme.customPallete.secondary.light}`,
      '&': theme.typography.subtitle2,
      textTransform: 'capitalize',
      '&:hover': {
        color: theme.customPallete.primary.main,
        background: 'transparent',
        border: `1px solid ${theme.customPallete.primary.main}`,
      },
    },
    loadingWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export default useStyles;
