import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Input, Select } from './index';
import { fetchCurrencies } from '../actions';

const paymentOptions = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormExpenditure extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      method: '',
      tag: '',
      currency: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    const { list } = this.props;

    return (
      <div>
        <form>
          <Input
            label="Valor: "
            type="text"
            onChange={ this.changeHandler }
            value={ value }
            name="value"
          />
          <Select
            onChange={ this.changeHandler }
            value={ currency }
            label="Moeda: "
            name="currency"
            options={ [...list] }
          />
          <Select
            onChange={ this.changeHandler }
            value={ method }
            label="Método de Pagamento: "
            name="method"
            options={ paymentOptions }
          />
          <Select
            onChange={ this.changeHandler }
            value={ tag }
            label="Tag: "
            name="tag"
            options={ tagOptions }
          />
          <Input
            label="Descrição:"
            type="text"
            onChange={ this.changeHandler }
            value={ description }
            name="description"
          />
          <input type="submit" value="Add" onClick="lele" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({ list: wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

FormExpenditure.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenditure);
