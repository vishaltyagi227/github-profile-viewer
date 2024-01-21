import React from 'react';
import { Button } from '@mui/material';

import { VARIANT } from '@constant/index';
import useStyles from './style';
import { IButton } from './type';

const CustomButton = ({
  children,
  variant,
  type,
  fullWidth,
  disabled,
  onClick,
  startIcon,
  className,
}: IButton) => {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      type={type}
      startIcon={startIcon}
      fullWidth={fullWidth}
      className={className || classes.btn}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  variant: VARIANT.text,
  fullWidth: false,
  disabled: false,
  onClick: () => {},
};

export default CustomButton;
