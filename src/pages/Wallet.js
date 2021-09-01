import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Form />
        <Tabela />
      </section>
    );
  }
}

export default Wallet;
