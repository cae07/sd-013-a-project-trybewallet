import React from 'react';

class Login extends React.Component {
  render() {
    // this.state = {
    //   email: '',
    //   password: '',
    // };
    // const sixCharacters = 6;
    // const passwordCorrect = password.length >= sixCharacters || false;

    // function handleChange({ target }) {
    //   const { name, value } = target;
    //   this.setState({
    //     [name]: value,
    //   });
    //   const re = /\S+@\S+\.\S+/;
    //   return re.test(email);
    // }

    return (
      <div>
        Login
        <input
          type="email"
          placeholder="Coloque seu e-mail"
          data-testid="email-input"
          // value={}
          name="email"
          // onChange={ validateEmail }
        />
        <input
          type="password"
          name="password"
          placeholder="Coloque sua senha"
          data-testid="password-input"
        />
        <button
          type="submit"
          // disabled={ !(validateEmail && passwordCorrect) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
