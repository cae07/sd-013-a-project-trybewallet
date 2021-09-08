import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { saveEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: false,
    };
  }

  render() {
    const fiveCharacters = 5;
    const REGEX_EMAIL = /\S+@\S+\.\S+/;
    const { email, password, disabled } = this.state;

    const handleClick = () => {
      const { history, emailDispatch } = this.props;
      // const { email } = this.state;
      emailDispatch(email);
      history.push('/carteira');
    };

    const verifica = () => {
      if (REGEX_EMAIL.test(email) && password.length >= fiveCharacters) {
        this.setState({
          disabled: true,
        });
      }
    };
    const handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
      verifica();
    };

    return (
      <Input
        disabled={ disabled }
        handleChange={ handleChange }
        email={ email }
        password={ password }
        onClick={ handleClick }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
