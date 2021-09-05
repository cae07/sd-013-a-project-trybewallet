import React from 'react';
import PropTypes from 'prop-types';
// 3.2.1 importar Link
import { Link } from 'react-router-dom';
// 3.3.3 importar connect e actions
import { connect } from 'react-redux';
import { loginAction } from '../actions/index';

// [1.5] - Criar os inputs do requisito. [feito em commit passado]

class Login extends React.Component {
  // [2.1.1] Constructor

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    // [2.1.4] bind dos handles
    this.handleInputs = this.handleInputs.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  // [2.1.3] logica dos handles

  // 3.3.5 {X} criar o button com a action de dispath. {Ultimo Passo}
  handleButton() {
    const { email } = this.state;
    const { loginDispatch } = this.props;
    loginDispatch(email);
  }

  handleInputs(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { email, password, disabled } = this.state;
      const regex = /(.)(.*)@(.)(.*)\.(...)(.*)/;
      const passNum = 6;
      if (email.match(regex) && password.length >= passNum && disabled === true) {
        this.setState({ disabled: false });
      }
    });
  }

  render() {
    // [2.1.2] render do forms
    const { email, password, disabled } = this.state;
    const { handleButton, handleInputs } = this;
    return (
      <form>
        <h1>Login</h1>
        <input
          data-testid="email-input"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ handleInputs }
        />
        <input
          data-testid="password-input"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ handleInputs }
        />
        {/* 3.2.2 colocar o link para /carteira */}
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ handleButton }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

// 3.3.4 criar a conecção com a action.

const mapStateToProps = (state) => ({
  stateUserEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
