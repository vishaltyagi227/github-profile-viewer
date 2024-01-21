import createTestStore from '@mock/createTestStore';
import server from '@mock/apiHandler';
import { userList } from '@mock/userData';
import { USER_NAME } from '@mock/constant';
import arbitrarySearchUsers from '../arbitrarySearchUsers';

describe('test arbitrary users search action creator', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('Should get user list and update store correctly', async () => {
    const store = createTestStore();
    const expectedState = {
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: userList,
    };
    await store.dispatch<any>(arbitrarySearchUsers(USER_NAME.correctUserName));
    expect(store.getState().searchUser).toEqual(expectedState);
  });

  it('Should get empty user list and update store when serach query not found any result ', async () => {
    const store = createTestStore();
    const expectedState = {
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: [],
    };
    await store.dispatch<any>(arbitrarySearchUsers(USER_NAME.wrongUserName));
    expect(store.getState().searchUser).toEqual(expectedState);
  });

  it('Should set state to its initial state when search query is Empty ', async () => {
    const store = createTestStore();
    const expectedState = {
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null,
    };
    await store.dispatch<any>(arbitrarySearchUsers(''));
    expect(store.getState().searchUser).toEqual(expectedState);
  });
});
