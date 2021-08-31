import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectCurrency from './SelectCurrency';
import SelectInput from './SelectInput';
import { payMethodOptions, expenseCategoryOptions } from '../data';
import { getCurrencies } from '../actions';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      expenseCategory: 'Alimentação',
      isLoadingCoins: false,
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }



  componentDidMount() {
    const { populateCoins } = this.props;
    populateCoins();
  }

  async fetchCoins() {
    this.setState({
      isLoadingCoins: true,
    });
    try {
      const response = await fetchAPI();
      const data = await Object.entries(response);
      const currencies = data.map(([name]) => name)
        .filter(([name]) => name !== 'USDT' && name !== 'DOGE');

      this.setState({
        isLoadingCoins: false,
        currencies,
      });
    } catch (error) {
      dispatch(requestAPIFailed());
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      paymentMethod,
      expenseCategory,
    } = this.state;

    return (
      <section>
        <form action="">
          <InputText
            name="value"
            value={ value }
            changeEvent={ this.handleChange }
            labelValue="Valor"
          />
          <InputText
            name="description"
            value={ description }
            changeEvent={ this.handleChange }
            labelValue="Descrição"
          />
          <SelectCurrency
            value={ currency }
            options={ currencies }
            changeEvent={ this.handleChange }
          />
          <SelectInput
            name="paymentMethod"
            value={ paymentMethod }
            options={ payMethodOptions }
            labelValue="Método de pagamento"
            changeEvent={ this.handleChange }
          />
          <SelectInput
            name="expenseCategory"
            value={ expenseCategory }
            options={ expenseCategoryOptions }
            labelValue="Tag"
            changeEvent={ this.handleChange }
          />
          <button type="button">Adicionar despesa</button>
        </form>
      </section>
    );
  }
}

ExpensesForm.propTypes = {
  populateCoins: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  populateCoins: () => dispatch(getCurrencies()),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
