import { cleanup } from '@testing-library/react';
import { UserActionType } from '@redux/actionType/index';
import { mockData } from '@mock/userData';
import { IUserState } from '../type';
import LoginReducer from '../LoginReducer';

describe('login reducer set login state correctly', () => {
  let mockInitialState: IUserState;
  beforeEach(() => {
    mockInitialState = {
      isLogged: false,
      isLoading: false,
      data: null,
    };
  });
  afterEach(cleanup);

  it('Should set isLoading true when request created', () => {
    const requestAction = {
      type: UserActionType.LOGIN_REQUEST,
    };
    expect(LoginReducer(mockInitialState, requestAction)).toEqual({
      isLogged: false,
      isLoading: true,
      data: null,
    });
  });

  it('Should set isLogged true and isLoading false and also set user data', () => {
    const successAction = {
      type: UserActionType.LOGIN_SUCCESS,
      payload: mockData,
    };
    expect(LoginReducer(mockInitialState, successAction)).toEqual({
      isLogged: true,
      isLoading: false,
      data: mockData,
    });
  });

  it('Should set initialState when Login failure occur', () => {
    const failureAction = {
      type: UserActionType.LOGIN_FAILURE,
    };
    expect(LoginReducer(mockInitialState, failureAction)).toEqual(
      mockInitialState
    );
  });

  it('Should set initialState when Logout', () => {
    const logoutAction = {
      type: UserActionType.LOGOUT,
    };
    expect(LoginReducer(mockInitialState, logoutAction)).toEqual(
      mockInitialState
    );
  });
});
