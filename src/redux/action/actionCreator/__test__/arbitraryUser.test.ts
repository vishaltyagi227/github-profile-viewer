import createTestStore from '@mock/createTestStore';
import server from '@mock/apiHandler';
import { mockData } from '@mock/userData';
import { USER_NAME } from '@mock/constant';
import arbitraryUsers from '../arbitraryUser';

describe('test arbitrary user action creator', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('Should fetch userInfo and update store coorectly', async () => {
    const store = createTestStore();
    const expectedState = {
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: mockData,
    };
    await store.dispatch<any>(arbitraryUsers(USER_NAME.correctUserName));
    expect(store.getState().arbitraryUser).toEqual(expectedState);
  });

  it('Should get 404 when username is not exist', async () => {
    const store = createTestStore();
    const expectedState = {
      isLoading: false,
      isSuccess: false,
      isFailure: true,
      data: null,
    };
    await store.dispatch<any>(arbitraryUsers(USER_NAME.wrongUserName));
    expect(store.getState().arbitraryUser).toEqual(expectedState);
  });
});
