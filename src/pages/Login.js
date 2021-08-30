import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../actions';
import './Login.css';

const emailRegex = /\S+@\S+\.\S+/;
const passwordMinLength = 6;

const initialLoginState = {
  email: '',
  password: '',
};

const handleChange = (setLogin, { type, value }) => {
  setLogin((state) => ({ ...state, [type]: value }));
};

function Login({ loginStatus, regUser }) {
  const [{ email, password }, setLogin] = useState(initialLoginState);
  const btnStatus = !(emailRegex.test(email) && password.length >= passwordMinLength);

  if (loginStatus) return <Redirect to="/carteira" />;

  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-heading">This is a login</h3>
        <input
          data-testid="email-input"
          className="login-email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => handleChange(setLogin, target) }
        />
        <input
          data-testid="password-input"
          className="login-password"
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => handleChange(setLogin, target) }
        />
        <button
          className="login-btn"
          type="button"
          disabled={ btnStatus }
          onClick={ () => regUser(email) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loginStatus: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  regUser: (payload) => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  loginStatus: PropTypes.string.isRequired,
  regUser: PropTypes.func.isRequired,
};
