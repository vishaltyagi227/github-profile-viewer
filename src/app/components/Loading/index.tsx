import React from 'react';
import { CircularProgress } from '@mui/material';

import useStyles from './style';

const Loading = () => {
  const classes = useStyles();
  return (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  );
};

export default Loading;
