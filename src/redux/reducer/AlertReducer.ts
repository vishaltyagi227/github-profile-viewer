import { AlertActionType } from '@redux/actionType';
import { IAlertType } from '@redux/actionType/type';
import { SUCCESS, ERROR } from '@constant/index';
import { IAlert } from './type';

const initialAlert: IAlert = {
  isSuccess: false,
  isFailure: false,
  alertType: SUCCESS,
  message: null,
};

const AlertReducer = (
  state: IAlert = initialAlert,
  action: IAlertType
): IAlert => {
  switch (action.type) {
    case AlertActionType.SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isFailure: false,
        alertType: SUCCESS,
        message: action.message,
      };
    case AlertActionType.ERROR:
      return {
        ...state,
        isSuccess: false,
        isFailure: true,
        alertType: ERROR,
        message: action.message,
      };
    case AlertActionType.CLEAR:
      return {
        ...state,
        isSuccess: false,
        isFailure: false,
        message: null,
      };
    default:
      return state;
  }
};

export default AlertReducer;
