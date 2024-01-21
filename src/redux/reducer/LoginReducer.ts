import { UserActionType } from '@redux/actionType/index';
import { IUserActionType } from '@redux/actionType/type';
import { IUserState } from './type';

const initialState: IUserState = {
  isLogged: false,
  isLoading: false,
  data: null,
};

const LoginReducer = (
  state: IUserState = initialState,
  action: IUserActionType
) => {
  switch (action.type) {
    case UserActionType.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case UserActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        data: action.payload,
      };
    case UserActionType.LOGIN_FAILURE:
      return { ...state, isLogged: false, isLoading: false };
    case UserActionType.LOGOUT:
      return { isLogged: false, isLoading: false, data: null };
    default:
      return state;
  }
};

export default LoginReducer;
