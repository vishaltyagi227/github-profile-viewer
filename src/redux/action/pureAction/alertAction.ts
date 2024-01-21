import { AlertActionType } from '@redux/actionType';
import { IAlertType } from '@redux/actionType/type';

const success = (message: string): IAlertType => ({
  type: AlertActionType.SUCCESS,
  message,
});

const error = (message: string): IAlertType => ({
  type: AlertActionType.ERROR,
  message,
});

const clear = (): IAlertType => ({ type: AlertActionType.CLEAR });

export { success, error, clear };
