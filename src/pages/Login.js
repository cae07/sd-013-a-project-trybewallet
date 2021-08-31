import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRegisterUser } from '../actions';
import { Inputs, Button } from '../components';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.validation(this.state);
  }

  validation({ email, password }) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const number = 6;

    if (regex.test(email) && password.length >= number) {
      this.setState({ disabled: false });
    }
  }

  handleClick() {
    const { history } = this.props;
    const { email, password } = this.state;
    actionRegisterUser({ email, password });
    history.push('/carteira');
  }

  render() {
    const { disable } = this.state;
    return (
      <form>
        <fieldset>
          <Inputs
            name="email"
            page="login"
            type="text"
            onHandleChange={ this.handleChange }
          />
          <Inputs
            name="password"
            page="login"
            type="password"
            onHandleChange={ this.handleChange }
          />
          <Button
            name="Entrar"
            onHandleClick={ this.handleClick }
            disable={ disable }
          />
        </fieldset>
      </form>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(actionRegisterUser(payload)),
});

Login.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(null, mapDispathToProps)(Login);
