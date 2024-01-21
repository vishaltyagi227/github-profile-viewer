import React from 'react';
import { Container, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';

import { VARIANT } from '@constant/index';
import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.notFoundContainer}>
      <div className={classes.notFoundWrapper}>
        <Typography variant={VARIANT.h3}>
          <Error className={classes.notFoundIcon} />
          404
        </Typography>
        <Typography variant={VARIANT.h3}>Not Found</Typography>
      </div>
    </Container>
  );
};

export default NotFound;
