import { cleanup } from '@testing-library/react';
import { SearchUserActionType } from '@redux/actionType/index';
import { userList } from '@mock/userData';
import { ISearchUser } from '../type';
import UserSearchReducer from '../UserSearchReducer';

describe('Alert reducer set alert state based alert action', () => {
  let mockInitialState: ISearchUser;
  beforeEach(() => {
    mockInitialState = {
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null,
    };
  });

  afterEach(cleanup);

  it('Should set isLoading true and rest properties same as previous', () => {
    const requestAction = {
      type: SearchUserActionType.SEARCH_REQUEST,
    };
    expect(UserSearchReducer(mockInitialState, requestAction)).toEqual({
      isLoading: true,
      isSuccess: false,
      isFailure: false,
      data: null,
    });
  });

  it('Should set isSuccess true with userList and rest properties same as previous ', () => {
    const successAction = {
      type: SearchUserActionType.SEARCH_SUCCESS,
      payload: userList,
    };
    expect(UserSearchReducer(mockInitialState, successAction)).toEqual({
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: userList,
    });
  });

  it('Should set isFailure true and rest properties same as previous ', () => {
    const failureAction = {
      type: SearchUserActionType.SEARCH_FAILURE,
    };
    expect(UserSearchReducer(mockInitialState, failureAction)).toEqual({
      isLoading: false,
      isSuccess: false,
      isFailure: true,
      data: null,
    });
  });

  it('Should set state to initialState', () => {
    const emptyAction = {
      type: SearchUserActionType.SEARCH_EMPTY,
    };
    expect(UserSearchReducer(mockInitialState, emptyAction)).toEqual(
      mockInitialState
    );
  });
});
