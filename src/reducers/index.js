// Importa os Reducers e a função combineReducers
import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// Combina em uma constante 'rootReducer' usando a função 'combineReducers'
const rootReducer = combineReducers({ user, wallet });

// Exporta o rootReducer que será utilizado no arquivo '../store/index'
export default rootReducer;
