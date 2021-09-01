import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, InputSelect, Header } from '../components';
import { walletFetch, setExpenses } from '../actions';
import './wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.cont = 0;
    this.listTag = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];

    this.paymentMethods = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];

    this.addDismissal = this.addDismissal.bind(this);
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  addDismissal() {
    const { fetchApi, setExpensess } = this.props;
    fetchApi();
    const { currencies } = this.props;
    const { value } = document.getElementById('value');
    const description = document.getElementById('description').value;
    const currency = document.getElementById('currency').value;
    const method = document.getElementById('method').value;
    const tag = document.getElementById('tag').value;

    setExpensess({
      id: this.cont,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    });
    this.cont += 1;
  }

  render() {
    const { currencies, email } = this.props;
    const lestSelecCurrencies = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');

    return (
      <>
        <Header email={ email } />
        <section>
          <form className="pure-form">
            <Input label="Valor" id="value" />
            <Input label="Descrição" id="description" />
            <InputSelect
              id="currency"
              label="Moeda"
              listSelect={ lestSelecCurrencies }
            />
            <InputSelect
              id="method"
              label="Método de pagamento"
              listSelect={ this.paymentMethods }

            />
            <InputSelect
              id="tag"
              label="Tag"
              listSelect={ this.listTag }
            />
            <button
              onClick={ this.addDismissal }
              type="button"
              className="button-success pure-button"
            >
              Adicionar despesa
            </button>
          </form>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies[0],
});
const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(walletFetch()),
  setExpensess: (payload) => dispatch(setExpenses(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.shape(),
  setExpensess: PropTypes.func.isRequired,
};
Wallet.defaultProps = {
  currencies: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
