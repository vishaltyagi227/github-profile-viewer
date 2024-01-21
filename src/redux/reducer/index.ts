import { combineReducers } from 'redux';
import LoginReducer from '@reducer/LoginReducer';
import AlertReducer from '@reducer/AlertReducer';
import UserSearchReducer from '@reducer/UserSearchReducer';
import ArbitraryUserReducer from '@reducer/ArbitraryUserReducer';

const allReducers = combineReducers({
  alertState: AlertReducer,
  loginState: LoginReducer,
  searchUser: UserSearchReducer,
  arbitraryUser: ArbitraryUserReducer,
});

export default allReducers;
export type IState = ReturnType<typeof allReducers>;
