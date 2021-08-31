import React from 'react';

class Login extends React.Component {
  render() {
    function validation() {
      const form = document.getElementById('form');
      const emailInput = document.getElementById('email-input').value;
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (emailInput.match(emailPattern))
      {
        form.classList.add('valid');
        form.classList.remove('invalid');
      }
      else
      {
        form.classList.add('invalid');
        form.classList.remove('valid');
      }
    }
    return (
      <div>
        <form id="form">
          Email
          <input
            data-testid="email-input"
            id="email-input"
            placeholder="Coloque seu Email"
            onKeyDown="validation()"
          />
          Senha
          <input data testid="password-input" />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
