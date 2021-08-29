/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setInfoLogin } from '../actions';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validateLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.validateData = this.validateData.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { history, dispatchSetInfo } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetInfo
    dispatchSetInfo(this.state);
    history.push('/carteira');
  }

  // validateData() {
  //   const { email, password } = this.state;
  //   const passwordFormat = '23456';
  //   const validateData = email === 'email@email.com' && password === passwordFormat;
  //   this.setState({
  //     validateLogin: validateData,
  //   });
  // }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
    // this.validateData();
    const { email, password } = this.state;
    const passwordFormat = '23456';
    this.setState(
      (email === 'email@email.com' && password === passwordFormat)
        ? {
          validateLogin: true,
        } : {
          validateLogin: false,
        },
    );
  }

  render() {
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
                type="submit"
                value="Entrar"
                className="btn float-right login_btn"
                disabled={ !validateLogin }
                onClick={ this.onSubmitForm }
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
  dispatchSetInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetInfo: (infoUser) => dispatch(setInfoLogin(infoUser)),
});

export default connect(null, mapDispatchToProps)(FormLogin);
