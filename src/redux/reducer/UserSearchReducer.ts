import { SearchUserActionType } from '@redux/actionType';
import { ISearchUserActionType } from '@redux/actionType/type';
import { ISearchUser } from './type';

const initialSearchUser: ISearchUser = {
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  data: null,
};

const UserSearchReducer = (
  state: ISearchUser = initialSearchUser,
  action: ISearchUserActionType
): ISearchUser => {
  switch (action.type) {
    case SearchUserActionType.SEARCH_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null,
      };
    case SearchUserActionType.SEARCH_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: action.payload,
      };
    case SearchUserActionType.SEARCH_FAILURE:
      return {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
        data: null,
      };
    case SearchUserActionType.SEARCH_EMPTY:
      return {
        isLoading: false,
        isSuccess: false,
        isFailure: false,
        data: null,
      };
    default:
      return state;
  }
};

export default UserSearchReducer;
