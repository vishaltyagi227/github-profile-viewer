import { LOCAL_STORAGE_KEY } from '@constant/index';
import { ILocalStore } from './type';

/**
 * store user name and token into local storage
 * @param userData - object which you want to store
 */
const setTokenInLocalStorage = (userData: ILocalStore) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
};

/**
 * remove the stored user name and token from local storage
 */
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
/**
 * provide username and token object which store in local storage
 * @returns stored object
 */
const getTokenFromLocalStorage = () => {
  const details = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  return details;
};
/**
 * provide information that token is present in loacal storage or not
 * @returns boolean
 */
const isTokenPresentInLocalStorage = () =>
  Boolean(localStorage.getItem(LOCAL_STORAGE_KEY));

export {
  setTokenInLocalStorage,
  removeTokenFromLocalStorage,
  isTokenPresentInLocalStorage,
  getTokenFromLocalStorage,
};
