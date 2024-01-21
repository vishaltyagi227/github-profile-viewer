import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ROUTE, PROTECTED_ROUTE, ARBITRARY_USER_KEY } from '@constant/index';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '@theme/index';

import ProtectedRoute from '@auth/ProtectedRoute';

import { IState } from '@reducer/index';
import { clear } from '@redux/action/pureAction/alertAction';

import {
  isTokenPresentInLocalStorage,
  getTokenFromLocalStorage,
} from '@services/localStorage';
import { userLogin, userLogout } from '@action/actionCreator/authUser';

import {
  Navbar,
  Follow,
  Profile,
  Login,
  ArbitraryUserSearch,
  ArbitraryProfile,
} from '@containers/index';
import AlertMessage from '@components/AlertMessage';

const App = () => {
  const userState = useSelector((state: IState) => state.loginState);
  const alertState = useSelector((state: IState) => state.alertState);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenPresentInLocalStorage()) {
      const { userName, token } = getTokenFromLocalStorage();
      dispatch(userLogin(userName, token, true));
    } else {
      dispatch(userLogout);
    }
  }, []);

  const handleClick = () => {
    dispatch(userLogout());
    history.push(ROUTE.Login);
  };

  const handleAlertClick = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clear());
  };

  return (
    <>
      {/* to inject the material ui styles first */}
      <StyledEngineProvider injectFirst>
        {/* provide them to the comopnents */}
        <ThemeProvider theme={theme}>
          <Navbar isLogged={userState.isLogged} handleClick={handleClick} />
          <AlertMessage
            open={alertState.isSuccess}
            alertType={alertState.alertType}
            message={alertState.message!}
            handleClick={handleAlertClick}
            type="autohide"
          />
          <Switch>
            <Route exact path={ROUTE.Home} component={ArbitraryUserSearch} />
            <Route exact path={ROUTE.Login} component={Login} />
            <Route
              exact
              path={`${ROUTE.ArbitraryUser}${ARBITRARY_USER_KEY}`}
              component={ArbitraryProfile}
            />
            <ProtectedRoute
              exact
              path={PROTECTED_ROUTE.Profile}
              component={Profile}
              isLogged={userState.isLogged || isTokenPresentInLocalStorage()}
            />
            <ProtectedRoute
              exact
              path={PROTECTED_ROUTE.Follow}
              component={Follow}
              isLogged={userState.isLogged || isTokenPresentInLocalStorage()}
            />
          </Switch>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default App;
