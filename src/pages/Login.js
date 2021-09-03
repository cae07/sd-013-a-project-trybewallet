import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      validPass: false,
      validEmail: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const maxPass = 6;

    this.setState({
      [event.target.name]: event.target.value,
    });

    if (event.target.name === 'senha') {
      const pass = event.target.value;
      this.setState({
        validPass: pass.length >= maxPass,
      });
    }

    if (event.target.name === 'email') {
      const email = event.target.value;
      this.setState({
        validEmail: email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g),
      });
    }
  }

  handleSubmit() {
    const { dispatchLogin } = this.props;
    const { email } = this.state;
    dispatchLogin(email);
  }

  render() {
    const { email, senha, validEmail, validPass } = this.state;
    const { redirect } = this.props;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form className="login-form" onSubmit={ () => this.handleSubmit() }>
        <label htmlFor="username" className="login-label">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
            maxLength="30"
          />
        </label>
        <label htmlFor="username" className="login-label">
          Senha:
          <input
            type="password"
            name="senha"
            id="senha"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleChange }
            placeholder="Senha"
            maxLength="30"
          />
        </label>
        <button
          type="submit"
          disabled={ !(validPass && validEmail) }
          className="login-btn"
        >
          Entrar
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  redirect: state.user.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(loginAction(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};
