import server from '@mock/apiHandler';
import { userList } from '@mock/userData';
import fetchRandomUsers from '../fetchRandomUsers';

describe('test fetchRandomUsers', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  it('Should return random users list ', async () => {
    const sinceID = 0;
    const response = await fetchRandomUsers(sinceID);
    expect(response).toEqual(userList);
  });
});
