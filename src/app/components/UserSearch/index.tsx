import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

import { POSITION, AUTO_COMPLETE } from '@constant/index';
import useStyles from './style';
import { ISearch } from './type';
import SEARCH_CONFIG from './constant';

const UserSearch = ({ handleChange }: ISearch) => {
  const classes = useStyles();
  return (
    <TextField
      placeholder={SEARCH_CONFIG.placeholder}
      type={SEARCH_CONFIG.type}
      name={SEARCH_CONFIG.name}
      onChange={handleChange}
      className={classes.searchInput}
      autoComplete={AUTO_COMPLETE.off}
      InputProps={{
        startAdornment: (
          <InputAdornment position={POSITION.start}>
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default UserSearch;
