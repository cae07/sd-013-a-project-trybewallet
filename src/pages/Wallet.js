import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, InputSelect, Header } from '../components';
import { walletFetch } from '../actions';
import './wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    const { currencies } = this.props;

    const lestSelecCurrencies = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');

    const listTag = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    const paymentMethods = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    const { email } = this.props;
    return (
      <>
        <Header email={ email } />
        <section>
          <form className="pure-form">
            <Input label="Valor" />
            <Input label="Descrição" />
            <InputSelect
              label="Moeda"
              listSelect={ lestSelecCurrencies }
            />
            <InputSelect
              label="Método de pagamento"
              listSelect={ paymentMethods }
            />
            <InputSelect
              label="Tag"
              listSelect={ listTag }
            />
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
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.shape(),
};
Wallet.defaultProps = {
  currencies: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
