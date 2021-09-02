import React from 'react';
import { Link } from 'react-router-dom';
import { GET_EMAIL } from '../actions/actionTypes';

const linkLogin = <Link to="/">Fazer Login</Link>;

const INITIAL_STATE = {
  email: linkLogin,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.state.email,
    };
  default:
    return state;
  }
};

export default user;
