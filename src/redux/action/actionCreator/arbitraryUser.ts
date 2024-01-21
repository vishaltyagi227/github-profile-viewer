import axiosClient from '@services/axios/axiosClient';
import { Dispatch } from 'redux';
import { IArbitraryUserActionType } from '@redux/actionType/type';
import { AxiosResponse } from 'axios';
import {
  requestArbitraryUser,
  successArbitraryUser,
  failureArbitraryUser,
} from '@redux/action/pureAction/arbitraryUserAction';
import { REQUEST_METHOD, ARBITRARY_USER_ENDOINT } from '@constant/index';
import { IData } from 'src/types/userDataType';

/**
 * fetch data of arbotrary user name and set store
 * @param userName - Arbitrary user name
 */
const arbitraryUser =
  (userName: string) =>
  async (dispatch: Dispatch<IArbitraryUserActionType>) => {
    dispatch(requestArbitraryUser());
    try {
      const response: AxiosResponse = await axiosClient({
        method: REQUEST_METHOD,
        url: `${ARBITRARY_USER_ENDOINT}${userName}`,
      });
      const { data }: { data: IData } = response;
      dispatch(successArbitraryUser(data));
    } catch (error) {
      dispatch(failureArbitraryUser());
    }
  };

export default arbitraryUser;
