import { AxiosResponse } from 'axios';
import {
  REQUEST_METHOD,
  RANDOM_USERS_ENDPOINT,
  PER_PAGE_USER,
} from '@constant/index';
import axiosClient from '@services/axios/axiosClient';
import { IData } from 'src/types/userDataType';

/**
 * fetch random users which have userId greater than sinceUserId
 * @param sinceUserId - github user Id
 * @returns  Promise of user data array
 */
const fetchRandomUsers = async (sinceUserId: number) => {
  const response: AxiosResponse = await axiosClient({
    method: REQUEST_METHOD,
    url: RANDOM_USERS_ENDPOINT,
    params: {
      since: sinceUserId,
      per_page: PER_PAGE_USER,
    },
  });
  const { data }: { data: IData[] } = response;
  return data;
};

export default fetchRandomUsers;
