import PropTypes from 'prop-types';
import React from 'react';

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
    const { history } = this.props;

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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
