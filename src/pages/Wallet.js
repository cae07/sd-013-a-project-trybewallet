import React from 'react';
import FormDespesa from '../components/FormDespesa';
import Topo from '../components/Topo';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Topo />
        <FormDespesa />
      </div>
    );
  }
}

export default Wallet;
