import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Typography } from '@mui/material';

import debounce from '@utils/debounce';
import arbitrarySearchUsers from '@redux/action/actionCreator/arbitrarySearchUsers';
import { USER_NOT_FOUND, ERROR, VARIANT } from '@constant/index';
import { searchEmpty } from '@redux/action/pureAction/searchUserAction';
import { IState } from '@reducer/index';
import Loading from '@components/Loading';
import SuggestionCard from '@components/SuggestionCard';
import UserSearch from '@components/UserSearch';
import AlertMessage from '@components/AlertMessage';
import useStyles from './style';

const ArbitraryUserSearch = () => {
  const classes = useStyles();
  const searchState = useSelector((state: IState) => state.searchUser);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(searchEmpty());
    },
    []
  );

  const handleChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.trim();
      dispatch(arbitrarySearchUsers(query));
    }, 1000),
    []
  );

  const list = searchState.data;

  return (
    <Container className={classes.searchContainer}>
      <Paper className={classes.searchWrapper}>
        <Typography variant={VARIANT.h4} className={classes.searchHeading}>
          Enter a Github username into the search box below
        </Typography>
        <UserSearch handleChange={handleChange} />
        <AlertMessage
          open={(searchState.isSuccess && list && list.length === 0) || false}
          alertType={ERROR}
          message={USER_NOT_FOUND}
        />
      </Paper>
      {searchState.isLoading && (
        <div className={classes.loadinWrapper}>
          <Loading />
        </div>
      )}
      {searchState.isSuccess && list && list.length > 0 && (
        <div className={classes.suggestionContainer}>
          {list.map((user) => (
            <div key={user.login} className={classes.suggestionWrapper}>
              <SuggestionCard
                userName={user.login}
                imageUrl={user.avatar_url}
              />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ArbitraryUserSearch;
