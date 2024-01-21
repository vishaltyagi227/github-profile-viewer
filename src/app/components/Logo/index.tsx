import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ROUTE, COMPONENT, SIZE, VARIANT } from '@constant/index';
import useStyles from './style';

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to={ROUTE.Home} className={classes.logo}>
      <GitHubIcon fontSize={SIZE.large} />
      <Typography
        variant={VARIANT.h4}
        component={COMPONENT.span}
        className={classes.logoText}
      >
        Social Card
      </Typography>
    </Link>
  );
};

export default Logo;
