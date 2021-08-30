import React from 'react';

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

  render() {
    const { email, password, validEmail, validPassword } = this.state;
    console.log(email, password, validEmail, validPassword);
    let button;
    if (validEmail && validPassword) {
      button = <button type="button">Entrar</button>;
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

export default Login;
