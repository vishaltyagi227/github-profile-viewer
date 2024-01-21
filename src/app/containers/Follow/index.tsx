import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Divider } from '@mui/material';
import { Refresh } from '@mui/icons-material';

import fetchRandomUsers from '@services/api/fetchRandomUsers';
import { IData } from 'src/types/userDataType';
import {
  MAX_USER_LIMIT,
  FOLLOW_ERROR_MESSAGE,
  ERROR,
  VARIANT,
} from '@constant/index';

import SuggestionCard from '@components/SuggestionCard';
import Button from '@components/Button';
import Loading from '@components/Loading';
import AlertMessage from '@components/AlertMessage';
import useStyles from './style';

const Follow = () => {
  const classes = useStyles();
  const [randomUsers, setRandomUsers] = useState<IData[]>([]);
  const [sinceId, setSinceId] = useState(0);
  const [errorMessage, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchRandomUsers(sinceId);
      setLoading(false);
      setRandomUsers((preRandomUsers) => {
        if (preRandomUsers.length > MAX_USER_LIMIT) {
          return data;
        }
        return preRandomUsers.concat(data);
      });
      setSinceId((preSinceId) => {
        const lastRandomUser = data[data.length - 1];
        return preSinceId + (lastRandomUser.id || 0);
      });
    } catch {
      setError(FOLLOW_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (randomUsers.length <= MAX_USER_LIMIT) {
      getUsers();
    }
  }, [randomUsers]);

  /**
   * handle the refresh button click
   */
  const handleClick = () => {
    getUsers();
  };

  /**
   * handle the close icon buttton in suggestion card
   * @param userName user name of github profile which close button click
   */
  const handleClose = (userName: string) => {
    setRandomUsers((preRandomUsers) =>
      preRandomUsers.filter((user) => user.login !== userName)
    );
  };

  return (
    <Container className={classes.followContainer}>
      <Paper className={classes.followWrapper}>
        <Typography variant={VARIANT.h4} className={classes.followHeading}>
          Who to Follow
        </Typography>
        <Button
          variant={VARIANT.text}
          startIcon={<Refresh />}
          onClick={handleClick}
          className={classes.refreshBtn}
        >
          Refresh
        </Button>
      </Paper>
      <div className={classes.followCardWrapper}>
        {isLoading && (
          <div className={classes.loadingWrapper}>
            <Loading />
          </div>
        )}
        <AlertMessage
          open={Boolean(errorMessage)}
          alertType={ERROR}
          message={errorMessage}
        />
        {!errorMessage &&
          randomUsers.slice(0, MAX_USER_LIMIT).map((user) => (
            <div key={user.login}>
              <SuggestionCard
                key={user.login}
                userName={user.login}
                imageUrl={user.avatar_url}
                closeBtn
                onClose={handleClose}
              />
              <Divider key={user.id} />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Follow;
