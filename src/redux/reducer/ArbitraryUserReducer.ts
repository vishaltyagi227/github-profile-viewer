import { ArbitraryUserActionType } from '@redux/actionType/index';
import { IArbitraryUserActionType } from '@redux/actionType/type';
import { IArbitraryUser } from './type';

const initialState: IArbitraryUser = {
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  data: null,
};

const ArbitraryUserReducer = (
  state: IArbitraryUser = initialState,
  action: IArbitraryUserActionType
): IArbitraryUser => {
  switch (action.type) {
    case ArbitraryUserActionType.USER_REQUEST:
      return { ...state, isLoading: true };
    case ArbitraryUserActionType.USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.payload,
      };
    case ArbitraryUserActionType.USER_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isFailure: true,
        data: null,
      };
    case ArbitraryUserActionType.USER_CLEAR:
      return {
        isSuccess: false,
        isLoading: false,
        isFailure: false,
        data: null,
      };
    default:
      return state;
  }
};

export default ArbitraryUserReducer;
