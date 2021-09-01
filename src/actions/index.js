export const USER_LOGGED_IN = 'user/login';

export const userLoggedIn = (email) => ({ type: USER_LOGGED_IN, payload: email });
