import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';

const store = createStore(
  rootReducers,
  composeWithDevTools(thunk),
);

export default store;
