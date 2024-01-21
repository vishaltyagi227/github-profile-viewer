import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '@reducer/index';

const middleWare = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, middleWare);

export default store;
