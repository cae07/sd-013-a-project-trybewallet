import React from 'react';
import CoinType from './componentsForms/CoinType';
import Description from './componentsForms/Description';
import PaymentType from './componentsForms/PaymentType';
import SpendingReason from './componentsForms/SpendingReason';
import Value from './componentsForms/Value';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      coin: '',
      method: '',
      reason: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, coin, method, reason } = this.state;
    return (
      <form>
        <Value
          onChange={ (event) => this.handleChange(event) }
          value={ value }
        />
        <Description
          onChange={ (event) => this.handleChange(event) }
          value={ description }
        />
        <CoinType
          onChange={ (event) => this.handleChange(event) }
          value={ coin }
        />
        <PaymentType
          onChange={ (event) => this.handleChange(event) }
          value={ method }
        />
        <SpendingReason
          onChange={ (event) => this.handleChange(event) }
          value={ reason }
        />
      </form>
    );
  }
}

export default Form;
