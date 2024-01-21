import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

import { IState } from '@reducer/index';

import ProfileTemplate from '@components/ProfileTemplate';
import useStyles from './style';

const Profile = () => {
  const userState = useSelector((state: IState) => state.loginState);
  const classes = useStyles();

  const userDetails = {
    userName: userState.data?.login,
    avatarUrl: userState.data?.avatar_url,
    url: userState.data?.html_url,
    blog: userState.data?.blog,
    location: userState.data?.location,
    email: userState.data?.email,
    bio: userState.data?.bio,
    following: userState.data?.following,
    followers: userState.data?.followers,
  };

  return (
    <Container className={classes.profileWrapper}>
      <ProfileTemplate userDetails={userDetails} />
    </Container>
  );
};

export default Profile;
