import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '@reducer/index';

const createTestStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
};

export default createTestStore;
