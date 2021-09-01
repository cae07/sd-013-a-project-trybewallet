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
      inputEmail: '',
      inputPassword: '',
      buttonDisabled: true,
      login: false,
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.checkUsernamePassword = this.checkUsernamePassword.bind(this);
    this.entrarOnClick = this.entrarOnClick.bind(this);
  }

  emailChange(e) {
    this.setState({
      inputEmail: e.target.value,
    });
    this.checkUsernamePassword();
  }

  passwordChange(e) {
    this.setState({
      inputPassword: e.target.value,
    });
    this.checkUsernamePassword();
  }

  checkUsernamePassword() {
    const PASS_LENGTH = 6;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const { inputEmail, inputPassword } = this.state;
    let buttonDisabled = true;

    if (inputPassword.length >= PASS_LENGTH
      && inputEmail.match(EMAIL_VALIDATION)
    ) {
      buttonDisabled = false;
    }
    this.setState({
      buttonDisabled,
    });
  }

  // botao precisa de uma funcao para o Dispatch(action) que altera o store
  entrarOnClick() {
    const { handleLoginEmail } = this.props;
    const { inputEmail } = this.state;
    handleLoginEmail(inputEmail);
    // this.props.history.push('/carteira')
    this.setState({
      login: true,
    });
    // console.log(this.state);
  }

  render() {
    const { login, buttonDisabled } = this.state;
    return (
      <div>

        <div data-testid="email-input">
          <input type="email" onChange={ this.emailChange } />
        </div>

        <div data-testid="password-input" onChange={ this.passwordChange }>
          <input type="password" />
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
