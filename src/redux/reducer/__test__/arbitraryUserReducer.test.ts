import { cleanup } from '@testing-library/react';
import { mockData } from '@mock/userData';
import { ArbitraryUserActionType } from '@redux/actionType/index';
import { IArbitraryUser } from '../type';
import ArbitraryUserReducer from '../ArbitraryUserReducer';

describe('Alert reducer set alert state based alert action', () => {
  let mockInitialState: IArbitraryUser;
  beforeEach(() => {
    mockInitialState = {
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null,
    };
  });

  afterEach(cleanup);

  it('Should set isLoading to true when requestArbitraryUser dispatch', () => {
    const requestAction = {
      type: ArbitraryUserActionType.USER_REQUEST,
    };
    expect(ArbitraryUserReducer(mockInitialState, requestAction)).toEqual({
      isLoading: true,
      isSuccess: false,
      isFailure: false,
      data: null,
    });
  });

  it('Should set isLoading to true when successArbitraryUser dispatch', () => {
    const successAction = {
      type: ArbitraryUserActionType.USER_SUCCESS,
      payload: mockData,
    };
    expect(ArbitraryUserReducer(mockInitialState, successAction)).toEqual({
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: mockData,
    });
  });

  it('Should set isfailure to true when failureArbitraryUser dispatch', () => {
    const failureAction = {
      type: ArbitraryUserActionType.USER_FAILURE,
    };
    expect(ArbitraryUserReducer(mockInitialState, failureAction)).toEqual({
      isLoading: false,
      isSuccess: false,
      isFailure: true,
      data: null,
    });
  });

  it('Should set state to initialState', () => {
    const clearAction = {
      type: ArbitraryUserActionType.USER_CLEAR,
    };
    expect(ArbitraryUserReducer(mockInitialState, clearAction)).toEqual(
      mockInitialState
    );
  });
});
