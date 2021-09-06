// Esse reducer será responsável por tratar as informações da pessoa usuária
import { input_email, input_senha } from "../actions";

const INITIAL_STATE = { 
    email: '',
    password: '',
};

function reducerUser(state = INITIAL_STATE, action) {
    switch(action.type){
        case input_email:
            return {...state, email: action.payload,};
        case input_senha:
            return {...state, password: action.payload,};
        default:
            return state;
    }
}

export default reducerUser;

