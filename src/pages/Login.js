import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import user from '../reducers/user';
import PropTypes from 'prop-types';
import loginAction from '../actions/loginAction';
// import {withRouter} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
      login: false,
      validEmail: false,
      validPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    // this.passwordChange = this.passwordChange.bind(this);
    // this.checkUsernamePassword = this.checkUsernamePassword.bind(this);
    this.entrarOnClick = this.entrarOnClick.bind(this);
  }

  checkUser(value) {
    const MAIL_REQUIREMENT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.match(MAIL_REQUIREMENT)) {
      this.setState({ validEmail: true }, () => this.checkLogin());
    }
  }

  checkPassword(value) {
    const PASS_REQUIREMENT = 6;
    if (value.length >= PASS_REQUIREMENT) {
      this.setState({ validPassword: true }, () => this.checkLogin());
    }
  }

  checkLogin() {
    const { validEmail, validPassword } = this.state;
    const checkIfValid = !(validEmail && validPassword);
    this.setState({ buttonDisabled: checkIfValid });
  }

  handleChange({ target }) {
    const { id, value } = target;

    this.setState({ [id]: value });

    if (id === 'email') {
      this.checkUser(value);
    }

    if (id === 'password') {
      this.checkPassword(value);
    }
  }

  // checkUsernamePassword() {
  //   const PASS_LENGTH = 6;
  //   const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
  //   const { inputEmail, inputPassword } = this.state;
  //   let buttonDisabled = true;

  //   if (inputPassword.length >= PASS_LENGTH
  //     && inputEmail.match(EMAIL_VALIDATION)
  //   ) {
  //     buttonDisabled = false;
  //   }
  //   this.setState({
  //     buttonDisabled,
  //   });
  // }

  // botao precisa de uma funcao para o Dispatch(action) que altera o store
  entrarOnClick() {
    const { handleLoginEmail } = this.props;
    const { email } = this.state;
    handleLoginEmail(email);
    // this.props.history.push('/carteira')
    this.setState({
      login: true,
    });
    // console.log(this.state);
  }

  render() {
    const { login, buttonDisabled } = this.state;
    const { email, password } = this.state;
    return (
      <div>

        <div>
          <input
            data-testid="email-input"
            id="email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </div>

        <div>
          <input
            data-testid="password-input"
            id="password"
            type="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <button
            type="button"
            onClick={ this.entrarOnClick }
            // disabled={ buttonDisabled }
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </div>
        {login ? <Redirect to="/carteira" /> : ''}

      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   user: state.user,
// })

const mapDispatchToProps = (dispatch) => ({
  handleLoginEmail: (payload) => dispatch(loginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
// export default Login;
Login.propTypes = {
  handleLoginEmail: PropTypes.func.isRequired,
};
