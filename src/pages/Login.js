import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input
          label="Email:"
          name="email"
          datatestid="email-input"
          onChange=""
        />
        <Input
          label="Senha:"
          name="password"
          datatestid="password-input"
          onChange=""
        />
        <Button
          onClick=""
        />
      </div>
    );
  }
}

export default Login;

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// Nesse link acima o regex significa anystring@anystring.anystring código do stackoverflow
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// o test retorna um booleano se o email for válido com o regex da true
// colocando a exclamação nega e daí fica falso com isso o botao ativa.
// https://medium.com/front-end-weekly/react-tips-disable-buttons-formdata-types-for-function-6c8f23d13b64
