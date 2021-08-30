// Importa o combineReducers do redux para fazer a junção dos reducers do app
import { combineReducers } from 'redux';

// Importa os 2 reducers criados conforme README
import user from './user';
import wallet from './wallet';

// Cria-se o rootReducer que vai combinar/unir os dois reducers
const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
