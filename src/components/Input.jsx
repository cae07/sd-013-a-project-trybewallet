import React from 'react';

class Input extends React.Component {
  render() {
    const { email, password, handleChange, disabled, onClick } = this.props;
    return (
      <div>
        Login
        <input
          type="email"
          placeholder="Coloque seu e-mail"
          data-testid="email-input"
          value={ email }
          name="email"
          onChange={ handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder="Coloque sua senha"
          data-testid="password-input"
          value={ password }
          onChange={ handleChange }
        />
        <button
          type="submit"
          onClick={ () => onClick() }
          disabled={ !(disabled) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Input;
