import { IData } from 'src/types/userDataType';
import { SUCCESS, ERROR, WARNING, INFO } from '@constant/index';

export interface IUserState {
  isLogged: boolean;
  isLoading: boolean;
  data?: IData | null;
}

export interface IAlert {
  isSuccess: boolean;
  isFailure: boolean;
  alertType: typeof SUCCESS | typeof ERROR | typeof WARNING | typeof INFO;
  message?: string | null;
}

export interface ISearchUser {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  data?: IData[] | null;
}
export interface IArbitraryUser {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  data?: IData | null;
}
