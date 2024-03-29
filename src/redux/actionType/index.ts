export enum UserActionType {
  LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  LOGIN_FAILURE = 'USER_LOGIN_FAILURE',
  LOGOUT = 'USER_LOGOUT',
}

export enum AlertActionType {
  SUCCESS = 'ALERT_SUCCESS',
  ERROR = 'ALERT_ERROR',
  CLEAR = 'ALERT_CLEAR',
}

export enum SearchUserActionType {
  SEARCH_REQUEST = 'USER_SEARCH_REQUEST',
  SEARCH_SUCCESS = 'USER_SEARCH_SUCCESS',
  SEARCH_FAILURE = 'USER_SEARCH_FAILURE',
  SEARCH_EMPTY = 'USER_SEARCH_EMPTY',
}

export enum ArbitraryUserActionType {
  USER_REQUEST = 'USER_REQUEST',
  USER_SUCCESS = 'USER_SUCCESS',
  USER_FAILURE = 'USER_FAILURE',
  USER_CLEAR = 'USER_CLEAR',
}
