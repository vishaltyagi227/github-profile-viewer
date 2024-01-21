import { ArbitraryUserActionType } from '@redux/actionType/index';
import { IArbitraryUserActionType } from '@redux/actionType/type';
import { IData } from 'src/types/userDataType';

const requestArbitraryUser = (): IArbitraryUserActionType => ({
  type: ArbitraryUserActionType.USER_REQUEST,
});

const successArbitraryUser = (data: IData): IArbitraryUserActionType => ({
  type: ArbitraryUserActionType.USER_SUCCESS,
  payload: data,
});

const failureArbitraryUser = (): IArbitraryUserActionType => ({
  type: ArbitraryUserActionType.USER_FAILURE,
});

const clearArbitraryUser = (): IArbitraryUserActionType => ({
  type: ArbitraryUserActionType.USER_CLEAR,
});

export {
  requestArbitraryUser,
  successArbitraryUser,
  failureArbitraryUser,
  clearArbitraryUser,
};
