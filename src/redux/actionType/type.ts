import {
  UserActionType,
  AlertActionType,
  SearchUserActionType,
  ArbitraryUserActionType,
} from '@redux/actionType';
import { IData } from 'src/types/userDataType';

export interface IUserActionType {
  type:
    | UserActionType.LOGIN_REQUEST
    | UserActionType.LOGIN_SUCCESS
    | UserActionType.LOGIN_FAILURE
    | UserActionType.LOGOUT;
  payload?: IData;
}

export interface IAlertType {
  type: AlertActionType.SUCCESS | AlertActionType.ERROR | AlertActionType.CLEAR;
  message?: string;
}

export interface ISearchUserActionType {
  type:
    | SearchUserActionType.SEARCH_REQUEST
    | SearchUserActionType.SEARCH_SUCCESS
    | SearchUserActionType.SEARCH_FAILURE
    | SearchUserActionType.SEARCH_EMPTY;
  payload?: IData[];
}

export interface IArbitraryUserActionType {
  type:
    | ArbitraryUserActionType.USER_REQUEST
    | ArbitraryUserActionType.USER_SUCCESS
    | ArbitraryUserActionType.USER_FAILURE
    | ArbitraryUserActionType.USER_CLEAR;
  payload?: IData;
}
