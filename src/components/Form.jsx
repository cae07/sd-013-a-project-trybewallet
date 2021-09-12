import React from 'react';
import Currency from './componentForms/Currency';
import Description from './componentForms/Description';
import Paycheck from './componentForms/Paycheck';
import Tag from './componentForms/Tag';
import Value from './componentForms/Value';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      paycheck: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    alert('clicou');
  }

  render() {
    const {
      value,
      description,
      currency,
      paycheck,
      tag,
    } = this.state;

    return (
      <form>
        <Value
          onChange={ (event) => this.handleChange(event) }
          value={ value }
        />
        <Description
          onChange={ (event) => this.handleChange(event) }
          description={ description }
        />
        <Currency
          onChange={ (event) => this.handleChange(event) }
          currency={ currency }
        />
        <Paycheck
          onChange={ (event) => this.handleChange(event) }
          paycheck={ paycheck }
        />
        <Tag
          onChange={ (event) => this.handleChange(event) }
          tag={ tag }
        />
      </form>
    );
  }
}

export default Form;
