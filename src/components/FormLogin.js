/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLogin } from '../actions';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validateLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const passwordFormat = '123456';
      this.setState(
        (email === 'alguem@email.com' && password === passwordFormat)
          ? {
            validateLogin: true,
          } : {
            validateLogin: false,
          },
      );
    });
  }

  render() {
    const { onSubmitForm } = this.props;
    const { validateLogin } = this.state;
    return (
      <div className="divWallet">
        <h1>TrybeWallet</h1>
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                data-testid="email-input"
                onChange={ this.handleChange }
              />
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="senha"
                data-testid="password-input"
                onChange={ this.handleChange }
              />
              <button
                type="button"
                value="Entrar"
                className="btn float-right login_btn"
                disabled={ !validateLogin }
                onClick={ () => onSubmitForm(this.state) }
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>);
  }
}

FormLogin.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetInfo: (infoUser) => dispatch(saveLogin(infoUser)),
});

export default connect(null, mapDispatchToProps)(FormLogin);
