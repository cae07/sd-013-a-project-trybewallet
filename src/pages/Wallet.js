import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getApiInfo } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  filterCurrencies() {
    const { currencies } = this.props;
    return currencies.map((currency) => currency.code);
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const Methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <form action="">
          <label htmlFor="value">
            Valor
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {currencies.map((currency, i) => (
                <option key={ i }>{currency.code}</option>)) }
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod">
              {Methods.map((method, i) => (
                <option key={ i } value={ method }>{method}</option>))}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              {tags.map((tag, i) => <option key={ i } value={ tag }>{tag}</option>)}
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getApiInfo()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
