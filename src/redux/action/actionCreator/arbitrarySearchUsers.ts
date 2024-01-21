import axiosClient from '@services/axios/axiosClient';
import { Dispatch } from 'redux';
import { ISearchUserActionType } from '@redux/actionType/type';
import { AxiosResponse } from 'axios';
import {
  searchRequest,
  searchSuccess,
  searchFailure,
  searchEmpty,
} from '@redux/action/pureAction/searchUserAction';
import { REQUEST_METHOD, USER_SEARCH_ENDPOINT } from '@constant/index';
import { IData } from 'src/types/userDataType';

/**
 * search the user based on user search query
 *  and dispatch action to set store
 * @param query - user search query
 */
const arbitrarySearchUsers =
  (query: string) => async (dispatch: Dispatch<ISearchUserActionType>) => {
    if (query.length > 0) {
      dispatch(searchRequest());
      try {
        const response: AxiosResponse<{ items: IData[] }> = await axiosClient({
          method: REQUEST_METHOD,
          url: USER_SEARCH_ENDPOINT,
          params: {
            q: query,
          },
        });
        const { items } = response.data;
        dispatch(searchSuccess(items));
      } catch (error) {
        dispatch(searchFailure());
      }
    } else {
      dispatch(searchEmpty());
    }
  };

export default arbitrarySearchUsers;
