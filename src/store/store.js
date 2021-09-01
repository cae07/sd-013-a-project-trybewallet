import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(() => {}, composeWithDevTools());

export default store;
