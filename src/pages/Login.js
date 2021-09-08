/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionSendLoginFormData } from '../actions';
import LoginFormComponent from '../components/LoginFormComponent';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailEnableButton: false,
      emailInput: '',
      passwordEnableButton: false,
      passwordInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    if (name === 'emailInput') {
      const emailIsValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if (emailIsValid) {
        this.setState({
          emailEnableButton: true,
        });
      }
    } else if (name === 'passwordInput') {
      const NUMBER = 6;
      if (value.length >= NUMBER) {
        this.setState({
          passwordEnableButton: true,
        });
      }
    }
  }

  handleClick() {
    const { sendLoginForm } = this.props;
    const { emailInput } = this.state;
    sendLoginForm(emailInput);
  }

  render() {
    const {
      emailEnableButton,
      emailInput,
      passwordEnableButton,
      passwordInput } = this.state;
    return (
      <LoginFormComponent
        emailEnableButton={ emailEnableButton }
        emailInput={ emailInput }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
        passwordEnableButton={ passwordEnableButton }
        passwordInput={ passwordInput }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLoginForm: (emailInput) => dispatch(actionSendLoginFormData(emailInput)),
});

Login.propTypes = {
  sendLoginForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
