import { UserActionType } from '@redux/actionType/index';
import { IUserActionType } from '@redux/actionType/type';
import { IData } from 'src/types/userDataType';

const requestAction = (): IUserActionType => ({
  type: UserActionType.LOGIN_REQUEST,
});

const successAction = (data: IData): IUserActionType => ({
  type: UserActionType.LOGIN_SUCCESS,
  payload: data,
});

const failureAction = (): IUserActionType => ({
  type: UserActionType.LOGIN_FAILURE,
});

const logoutAction = (): IUserActionType => ({
  type: UserActionType.LOGOUT,
});

export { requestAction, successAction, failureAction, logoutAction };
