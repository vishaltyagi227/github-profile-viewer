import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import arbitraryUser from '@redux/action/actionCreator/arbitraryUser';
import { IState } from '@reducer/index';

import ProfileTemplate from '@components/ProfileTemplate';
import NotFound from '@components/NotFound';
import Loading from '@components/Loading';
import useStyles from '@containers/Profile/style';
import { clearArbitraryUser } from '@redux/action/pureAction/arbitraryUserAction';

const ArbitraryProfile = () => {
  const classes = useStyles();
  const { userName }: { userName: string } = useParams();
  const arbitraryUserState = useSelector(
    (state: IState) => state.arbitraryUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(arbitraryUser(userName));
    return () => {
      dispatch(clearArbitraryUser());
    };
  }, []);

  const userDetails = {
    userName: arbitraryUserState.data?.login,
    avatarUrl: arbitraryUserState.data?.avatar_url,
    url: arbitraryUserState.data?.html_url,
    blog: arbitraryUserState.data?.blog,
    location: arbitraryUserState.data?.location,
    email: arbitraryUserState.data?.email,
    bio: arbitraryUserState.data?.bio,
    following: arbitraryUserState.data?.following,
    followers: arbitraryUserState.data?.followers,
  };

  if (arbitraryUserState.isFailure) {
    return <NotFound />;
  }

  return (
    <Container className={classes.profileWrapper}>
      {arbitraryUserState.isSuccess ? (
        <ProfileTemplate userDetails={userDetails} />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default ArbitraryProfile;
