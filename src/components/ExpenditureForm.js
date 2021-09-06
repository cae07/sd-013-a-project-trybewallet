import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import SelectCoin from './SelectCoin';
import SelectPayment from './SelectPayment';
import SelectCategory from './SelectCategory';

class ExpenditureForm extends React.Component {
  render() {
    const { value, description, currency, method, tag, handleChange } = this.props;
    return (
      <div>
        <form>
          <Input
            name="value"
            value={ value }
            label="Valor:"
            handleChange={ handleChange }
          />
          <Input
            label="Descrição:"
            name="description"
            value={ description }
            handleChange={ handleChange }
          />
          <SelectCoin
            handleChange={ handleChange }
            currency={ currency }
          />
          <SelectPayment
            handleChange={ handleChange }
            method={ method }
          />
          <SelectCategory
            handleChange={ handleChange }
            tag={ tag }
          />
        </form>
      </div>
    );
  }
}

ExpenditureForm.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string,
  handleChange: PropTypes.func,
  method: PropTypes.string,
  tag: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default ExpenditureForm;
