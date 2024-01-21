import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  BASE_URL,
  ARBITRARY_USER_ENDOINT,
  ARBITRARY_USER_KEY,
  USER_ENDPOINT,
  USER_SEARCH_ENDPOINT,
  RANDOM_USERS_ENDPOINT,
} from '@constant/index';
import { mockData, userList } from './userData';
import { TOKEN, USER_NAME } from './constant';

const server = setupServer(
  rest.get(`${BASE_URL}${USER_ENDPOINT}`, (req, res, ctx) => {
    const token = req.headers.get('authorization');
    if (token === `Bearer ${TOKEN.correctToken}`) {
      return res(ctx.status(200), ctx.json(mockData));
    }
    return res(ctx.status(404));
  }),
  rest.get(
    `${BASE_URL}${ARBITRARY_USER_ENDOINT}${ARBITRARY_USER_KEY}`,
    (req, res, ctx) => {
      const { userName } = req.params;
      if (userName === USER_NAME.correctUserName) {
        return res(ctx.status(200), ctx.json(mockData));
      }
      return res(ctx.status(404));
    }
  ),
  rest.get(`${BASE_URL}${USER_SEARCH_ENDPOINT}`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const searchQuery = query.get('q');
    if (searchQuery === USER_NAME.correctUserName) {
      return res(ctx.status(200), ctx.json({ items: [mockData] }));
    }
    return res(ctx.status(200), ctx.json({ items: [] }));
  }),
  rest.get(`${BASE_URL}${RANDOM_USERS_ENDPOINT}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(userList))
  )
);

export default server;
