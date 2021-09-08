import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Coin from './Coin';
import Payment from './Payment';
import Category from './Category';

class Forms extends React.Component {
  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      handleChange } = this.props;

    return (
      <div>
        <form>
          <Input
            label="Valor:"
            name="value"
            value={ value }
            handleChange={ handleChange }
          />
          <Input
            label="Descrição"
            name="description"
            value={ description }
            handleChange={ handleChange }
          />
          <Coin
            handleChange={ handleChange }
            currency={ currency }
          />
          <Payment
            handleChange={ handleChange }
            method={ method }
          />
          <Category
            handleChange={ handleChange }
            tag={ tag }
          />
        </form>
      </div>
    );
  }
}

Forms.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string,
  handleChange: PropTypes.func,
  method: PropTypes.string,
  tag: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Forms;
