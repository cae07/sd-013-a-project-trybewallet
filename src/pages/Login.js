import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

// Para o Regex -> https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
// Disable Button -> https://flaviocopes.com/how-to-disable-button-javascript/
// https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/12e43f36-f8b7-4428-a98b-2e22480e434d/mapdispatchtoprops-e-dispatch/4094fac7-fae3-482e-a1f6-7d09c1c28200?use_case=side_bar

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      buttonStateDisabled: true,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  inputValidation() {
    const emailValidation = /\S+@\S+\.\S+/;
    const passwordValidationLength = 6;
    const { email, password } = this.state;

    if (emailValidation.test(email) && password.length >= passwordValidationLength) {
      this.setState({
        buttonStateDisabled: false,
      });
    } else {
      this.setState({
        buttonStateDisabled: true,
      });
    }
  }

  render() {
    const { email, password, buttonStateDisabled } = this.state;
    const { myFirstDispatch } = this.props;
    return (
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="Insira seu Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="text"
          name="password"
          data-testid="password-input"
          placeholder="Insira sua senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <Link to="/carteira">
          <button
            disabled={ buttonStateDisabled }
            type="button"
            onClick={ () => myFirstDispatch(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (payload) => dispatch(loginAction(payload)),
});

Login.propTypes = ({
  myFirstDispatch: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
