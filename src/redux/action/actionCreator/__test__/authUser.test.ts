import createTestStore from '@mock/createTestStore';
import server from '@mock/apiHandler';
import { USER_NAME, TOKEN } from '@mock/constant';
import { mockData } from '@mock/userData';
import {
  SUCCESS,
  SUCCESS_MESSAGE,
  ERROR,
  BAD_CREDENTIAL_MESSAGE,
  ERROR_MESSAGE,
} from '@constant/index';
import { userLogin, userLogout } from '../authUser';

describe('test user login action creator', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('Should authenticate user and set store with user data when token and userName correct', async () => {
    const store = createTestStore();
    const expectedLoginState = {
      isLogged: true,
      isLoading: false,
      data: mockData,
    };
    const expectedAlertState = {
      isSuccess: true,
      isFailure: false,
      alertType: SUCCESS,
      message: SUCCESS_MESSAGE,
    };
    await store.dispatch<any>(
      userLogin(USER_NAME.correctUserName, TOKEN.correctToken)
    );
    expect(store.getState().loginState).toEqual(expectedLoginState);
    expect(store.getState().alertState).toEqual(expectedAlertState);
  });

  it('Should set alert message as username not matched when userName is wrong bur token is correct', async () => {
    const store = createTestStore();
    const expectedLoginState = {
      isLogged: false,
      isLoading: false,
      data: null,
    };
    const expectedAlertState = {
      isSuccess: false,
      isFailure: true,
      alertType: ERROR,
      message: BAD_CREDENTIAL_MESSAGE,
    };
    await store.dispatch<any>(
      userLogin(USER_NAME.wrongUserName, TOKEN.correctToken)
    );
    expect(store.getState().loginState).toEqual(expectedLoginState);
    expect(store.getState().alertState).toEqual(expectedAlertState);
  });

  it('Should set alert message as token is not valid when token is not correct', async () => {
    const store = createTestStore();
    const expectedLoginState = {
      isLogged: false,
      isLoading: false,
      data: null,
    };
    const expectedAlertState = {
      isSuccess: false,
      isFailure: true,
      alertType: ERROR,
      message: ERROR_MESSAGE,
    };
    await store.dispatch<any>(
      userLogin(USER_NAME.wrongUserName, TOKEN.wrongToken)
    );
    expect(store.getState().loginState).toEqual(expectedLoginState);
    expect(store.getState().alertState).toEqual(expectedAlertState);
  });
});

describe('test user logout action', () => {
  it('Should set login state to its initial state when user logout', () => {
    const store = createTestStore();
    const expectedLoginState = {
      isLogged: false,
      isLoading: false,
      data: null,
    };
    store.dispatch<any>(userLogout());
    expect(store.getState().loginState).toEqual(expectedLoginState);
  });
});
