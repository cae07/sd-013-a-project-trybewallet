import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, getCurrencies } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import responseAPIToArray from '../utils/responseAPIToArray';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { handleGetCurrencies } = this.props;
    handleGetCurrencies();
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleAddExpense, currencies, handleGetCurrencies } = this.props;

    handleGetCurrencies();

    handleAddExpense({ ...this.state, exchangeRates: currencies });
  }

  renderSelects() {
    const { isLoading, currencies } = this.props;
    const mapCurrenciesToOptions = responseAPIToArray(currencies);

    return (
      <>
        <Select
          label="Moeda:"
          name="currency"
          options={ mapCurrenciesToOptions }
          onChange={ this.handleChangeInput }
          isLoading={ isLoading }
        />
        <Select
          label="Método de pagamento:"
          name="method"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChangeInput }
        />
        <Select
          label="Tag:"
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChangeInput }
        />
      </>
    );
  }

  render() {
    const { value, description } = this.state;

    return (
      <>
        <Header />
        <form onSubmit={ this.handleSubmit }>
          <Input
            label="Valor:"
            name="value"
            type="number"
            placeholder="00,00"
            test=""
            onChange={ this.handleChangeInput }
            value={ value }
          />
          <Input
            label="Descrição:"
            name="description"
            type="text"
            placeholder="..."
            test=""
            onChange={ this.handleChangeInput }
            value={ description }
          />
          { this.renderSelects() }

          <button type="submit">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  isLoading: wallet.isLoading,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetCurrencies: () => dispatch(getCurrencies()),
  handleAddExpense: (expense) => dispatch(addExpense(expense)),
});

Wallet.propTypes = {
  handleGetCurrencies: PropTypes.func.isRequired,
  handleAddExpense: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
