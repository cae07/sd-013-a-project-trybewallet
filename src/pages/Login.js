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
    let button;
    if (validEmail && validPassword) {
      button = <button type="button" onClick={ this.handleClick }>Entrar</button>;
    } else {
      button = <button type="button" disabled>Entrar</button>;
    }
    return (
      <div>
        <input
          id="email"
          type="text"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleTextChange }
        />
        <input
          id="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleTextChange }
        />
        { button }
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
