import React from 'react';
import ButtonIn from './ButtonIn';

class FormEP extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" type="email" placeholder="Email" required />
        <input
          data-testid="password-input"
          type="password"
          placeholder="senha"
          required
        />
        <ButtonIn />
      </div>);
  }
}
export default FormEP;
