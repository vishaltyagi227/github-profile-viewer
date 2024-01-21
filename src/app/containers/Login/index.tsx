import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Container, Typography, CircularProgress } from '@mui/material';

import isEmptyString from '@utils/index';
import {
  PROTECTED_ROUTE,
  EMPTY_INPUT,
  VARIANT,
  AUTO_COMPLETE,
  COMPONENT,
} from '@constant/index';
import { userLogin } from '@redux/action/actionCreator/authUser';

import { IState } from '@reducer/index';
import { clear } from '@redux/action/pureAction/alertAction';

import Inputfield from '@components/Inputfield';
import Button from '@components/Button';
import AlertMessage from '@components/AlertMessage';

import useStyles from './style';
import {
  FORM_CONFIG,
  SUBMIT_BUTTON_TYPE,
  BUTTON_LOADING_SIZE,
} from './constant';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userState = useSelector((state: IState) => state.loginState);
  const alertState = useSelector((state: IState) => state.alertState);

  const [input, setInput] = useState({
    userName: '',
    password: '',
  });
  const [isValidUserName, setUserNameMessage] = useState('');
  const [isValidPassword, setPasswordMessage] = useState('');

  useEffect(() => {
    if (!isEmptyString(input.userName)) {
      setUserNameMessage('');
    }
    if (!isEmptyString(input.password)) setPasswordMessage('');
  }, [input]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmptyString(input.userName)) {
      setUserNameMessage(EMPTY_INPUT);
    }
    if (isEmptyString(input.password)) {
      setPasswordMessage(EMPTY_INPUT);
    }
    if (isEmptyString(input.userName) || isEmptyString(input.password)) {
      return;
    }
    dispatch(userLogin(input.userName, input.password));
  };

  const handleClick = () => {
    dispatch(clear());
  };

  if (userState.isLogged) {
    return <Redirect to={PROTECTED_ROUTE.Profile} />;
  }

  return (
    <>
      <Container className={classes.loginContainer}>
        <Box
          component={COMPONENT.form}
          noValidate
          autoComplete={AUTO_COMPLETE.off}
          className={classes.container}
          onSubmit={handleSubmit}
        >
          <Box className={classes.wrapper}>
            <Typography
              variant={VARIANT.h4}
              className={classes.heading}
              gutterBottom
            >
              LogIn
            </Typography>
            <AlertMessage
              open={alertState.isFailure}
              alertType={alertState.alertType}
              message={alertState.message!}
              handleClick={handleClick}
            />
            <Inputfield
              error={Boolean(isValidUserName)}
              type={FORM_CONFIG.userName.type}
              label={FORM_CONFIG.userName.label}
              name={FORM_CONFIG.userName.name}
              value={input.userName}
              handleChange={handleChange}
              helperText={isValidUserName}
            />
            <Inputfield
              error={Boolean(isValidPassword)}
              type={FORM_CONFIG.password.type}
              label={FORM_CONFIG.password.label}
              name={FORM_CONFIG.password.name}
              value={input.password}
              handleChange={handleChange}
              helperText={isValidPassword}
            />
            <Button
              variant={VARIANT.contained}
              type={SUBMIT_BUTTON_TYPE}
              fullWidth
            >
              {userState.isLoading ? (
                <CircularProgress
                  size={BUTTON_LOADING_SIZE}
                  className={classes.progress}
                />
              ) : (
                'Login'
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
