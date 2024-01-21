import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import axiosClient from '@services/axios/axiosClient';
import {
  setTokenInLocalStorage,
  removeTokenFromLocalStorage,
} from '@services/localStorage';

import {
  REQUEST_METHOD,
  USER_ENDPOINT,
  ERROR_MESSAGE,
  BAD_CREDENTIAL_MESSAGE,
  SUCCESS_MESSAGE,
} from '@constant/index';

import { success, error } from '@redux/action/pureAction/alertAction';
import {
  requestAction,
  successAction,
  failureAction,
  logoutAction,
} from '@redux/action/pureAction/userAction';
import { IUserActionType, IAlertType } from '@redux/actionType/type';

import { IData } from 'src/types/userDataType';

/**
 * provide authentication of user and set store
 * @param userName - login username
 * @param password - user access token
 * @param refresh -  mention function call due to page refresh
 */
const userLogin =
  (userName: string, password: string, refresh = false) =>
  async (dispatch: Dispatch<IUserActionType | IAlertType>) => {
    dispatch(requestAction());

    try {
      const response: AxiosResponse = await axiosClient({
        method: REQUEST_METHOD,
        url: USER_ENDPOINT,
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      const { data }: { data: IData } = response;

      if (data.login === userName) {
        setTokenInLocalStorage({ userName, token: password });
        if (!refresh) dispatch(success(SUCCESS_MESSAGE));
        dispatch(successAction(data));
      } else {
        dispatch(error(BAD_CREDENTIAL_MESSAGE));
        dispatch(failureAction());
      }
    } catch {
      dispatch(error(ERROR_MESSAGE));
      dispatch(failureAction());
    }
  };

/**
 * remove token from locakStorage
 * and dispatch logout action
 */
const userLogout = () => (dispatch: Dispatch<IUserActionType>) => {
  removeTokenFromLocalStorage();
  dispatch(logoutAction());
};

export { userLogin, userLogout };
