import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import index from '../reducers';

const store = createStore(
  index,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
