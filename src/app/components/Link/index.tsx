import React from 'react';
import { Button, Link } from '@mui/material';

import { ILink } from './type';

const CustomLink = ({ children, btn, ...props }: ILink) => (
  <>
    {btn ? (
      <Button {...props}>{children}</Button>
    ) : (
      <Link {...props}>{children}</Link>
    )}
  </>
);

CustomLink.defaultProps = {
  btn: false,
};

export default CustomLink;
