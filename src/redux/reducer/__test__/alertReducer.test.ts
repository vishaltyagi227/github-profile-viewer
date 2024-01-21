import { cleanup } from '@testing-library/react';
import { AlertActionType } from '@redux/actionType/index';
import { SUCCESS, ERROR } from '@constant/index';
import { IAlert } from '../type';
import AlertReducer from '../AlertReducer';

describe('Alert reducer set alert state based alert action', () => {
  let mockInitialState: IAlert;
  beforeEach(() => {
    mockInitialState = {
      isSuccess: false,
      isFailure: false,
      alertType: SUCCESS,
      message: null,
    };
  });

  afterEach(cleanup);

  it('Should set isSuccess true with message and rest properties same as previous', () => {
    const message = 'successfull';
    const successAction = {
      type: AlertActionType.SUCCESS,
      message,
    };
    expect(AlertReducer(mockInitialState, successAction)).toEqual({
      isSuccess: true,
      isFailure: false,
      alertType: SUCCESS,
      message,
    });
  });

  it('Should set isFailure true with message and rest properties same as previous ', () => {
    const message = 'Error occur';
    const errorAction = {
      type: AlertActionType.ERROR,
      message,
    };
    expect(AlertReducer(mockInitialState, errorAction)).toEqual({
      isSuccess: false,
      isFailure: true,
      alertType: ERROR,
      message,
    });
  });

  it('Should set state to initialState ', () => {
    const clearAction = {
      type: AlertActionType.CLEAR,
    };
    expect(AlertReducer(mockInitialState, clearAction)).toEqual(
      mockInitialState
    );
  });
});
