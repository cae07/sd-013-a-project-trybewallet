import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions';
import digitalWallet from '../images/digitalWallet.jpg';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      senha: '',
      buttonDesabled: true,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  inputValidation() {
    // REGEX retirado do post: https://stackoverflow.com/questions/35788383/regex-validation-in-javascript-email
    const emailValidationRegex = /\S+@\S+\.\S+/;
    const magicNumber = 6;
    const { email, senha } = this.state;

    if (emailValidationRegex.test(email) && senha.length >= magicNumber) {
      this.setState({
        buttonDesabled: false,
      });
    } else {
      this.setState({
        buttonDesabled: true,
      });
    }
  }

  render() {
    const { email, senha, buttonDesabled } = this.state;
    const { handleEmail } = this.props;

    return (
      <div className="cointainer-login">
        <div>
          <img src={ digitalWallet } alt="carteira" />
        </div>
        <div>
          <div className="trybe-wallet">trybeWallet</div>
          <fieldset className="fieldset">
            <p>E-mail</p>
            <input
              data-testid="email-input"
              type="email"
              placeholder="Digite seu e-mail"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              className="form-control"
            />

            <p>Senha</p>
            <input
              data-testid="password-input"
              type="text"
              placeholder="Digite sua senha"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
              className="form-control"
            />

            <Link to="/carteira">
              <button
                type="button"
                disabled={ buttonDesabled }
                onClick={ () => handleEmail(email) }
                className="btn btn-light"
              >
                Entrar
              </button>
            </Link>
          </fieldset>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleEmail: (payload) => dispatch(userAction(payload)),
});

Login.propTypes = ({
  handleEmail: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
