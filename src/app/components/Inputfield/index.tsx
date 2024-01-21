import React from 'react';
import { TextField } from '@mui/material';

import { VARIANT } from '@constant/index';
import useStyles from './style';
import { IField } from './type';

const Inputfield = ({
  type,
  label,
  value,
  name,
  error,
  helperText,
  handleChange,
}: IField): JSX.Element => {
  const classes = useStyles();

  return (
    <TextField
      error={error}
      type={type}
      variant={VARIANT.outlined}
      label={label}
      className={classes.input}
      value={value}
      name={name}
      onChange={handleChange}
      helperText={helperText}
    />
  );
};

Inputfield.defaultProps = {
  error: false,
  helperText: '',
};

export default Inputfield;
