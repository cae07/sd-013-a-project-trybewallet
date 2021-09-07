import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionLogIn } from '../actions';

const MIN_PASSWORD = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTextChange(event) {
    const { target: { id, value } } = event;
    if (id === 'email') {
      this.setState({
        [id]: value,
        validEmail: ((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(value)),
      });
    } else {
      this.setState({
        [id]: value,
        validPassword: (value.length >= MIN_PASSWORD),
      });
    }
  }

  handleClick() {
    const { email, password } = this.state;
    const { history, userInfo } = this.props;
    const payload = {
      email,
      password,
    };
    userInfo(payload);
    history.push('/carteira');
  }

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <div className="text-center" cz-shortcut-listen="true">
        <form className="form-signin">
          <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wallet_Flat_Icon.svg/512px-Wallet_Flat_Icon.svg.png" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
          <input
            className="form-control"
            id="email"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleTextChange }
          />
          <input
            className="form-control"
            id="password"
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.handleTextChange }
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="button"
            disabled={ !(validEmail && validPassword) }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  userInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userInfo: (payload) => dispatch(actionLogIn(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
