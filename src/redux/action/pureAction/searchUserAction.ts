import { SearchUserActionType } from '@redux/actionType';
import { ISearchUserActionType } from '@redux/actionType/type';
import { IData } from 'src/types/userDataType';

const searchRequest = (): ISearchUserActionType => ({
  type: SearchUserActionType.SEARCH_REQUEST,
});

const searchSuccess = (data: IData[]): ISearchUserActionType => ({
  type: SearchUserActionType.SEARCH_SUCCESS,
  payload: data,
});

const searchFailure = (): ISearchUserActionType => ({
  type: SearchUserActionType.SEARCH_FAILURE,
});

const searchEmpty = (): ISearchUserActionType => ({
  type: SearchUserActionType.SEARCH_EMPTY,
});

export { searchRequest, searchSuccess, searchFailure, searchEmpty };
