import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, this.verifyEmailAndPassword);
    // Fazer verificacao
  }

  handleClick() {
    const { email } = this.state;
    const { infoLogin, history } = this.props;
    infoLogin(email);
    history.push('/carteira');
  }

  verifyEmailAndPassword() {
    const checkEmail = /.+@.+\.[A-Za-z]+$/;
    const minimumCarac = 5;
    const { password, email } = this.state;
    if (password.length > minimumCarac && checkEmail.test(email)) {
      this.setState({ button: false });
    } else { this.setState({ button: true }); }
  }

  render() {
    const { button } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            onChange={ handleChange }
            placeholder="Email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ handleChange }
            id="password"
            name="password"
          />
        </label>
        <button
          type="submit"
          onClick={ handleClick }
          disabled={ button }
        >
          Entrar
        </button>
      </div>);
  }
}

const MapDispatchToProps = (dispatch) => ({
  infoLogin: (state) => dispatch(userAction(state)),
});

Login.propTypes = {
  infoLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, MapDispatchToProps)(Login);
