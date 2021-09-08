import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link to="/carteira">
        <button type="button">Entrar</button>
      </Link>
    );
  }
}

export default Button;
