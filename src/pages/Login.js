import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formEmail } from '../actions/index';

const validacaoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const NUMBER_SIX = 6;
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, actionEmail } = this.props;
    const { email } = this.state;

    actionEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                value={ email }
                onChange={ this.handleOnChange }
                id="email"
                placeholder="cafe@trybe.com"
                data-testid="email-input"
                name="email"
              />
            </label>

            <label htmlFor="password">
              Senha:
              <input
                type="password"
                value={ password }
                onChange={ this.handleOnChange }
                id="password"
                placeholder="password"
                data-testid="password-input"
                name="password"
              />
            </label>

            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ !(validacaoEmail.test(email) && password.length >= NUMBER_SIX) }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  actionEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actionEmail: (email) => dispatch(formEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
