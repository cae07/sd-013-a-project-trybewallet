import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../../actions';
import { Input, Select } from '../../components';
import { Form, Main } from './styles';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  renderHeader() {
    const { userEmail } = this.props;
    return (
      <header>
        <section data-testid="email-field">{userEmail}</section>
        <section data-testid="total-field">0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() {
    const { coins } = this.props;
    const coinsSelect = coins.map((coin) => ({ value: coin, label: coin }));
    const paymentMethods = [
      { value: 'money', label: 'Dinheiro' },
      { value: 'credit', label: 'Cartão de crédito' },
      { value: 'money', label: 'Cartão de débito' },
    ];
    const tags = [
      { value: 'food', label: 'Alimentação' },
      { value: 'leisure', label: 'Lazer' },
      { value: 'work', label: 'Trabalho' },
      { value: 'transport', label: 'Transporte' },
      { value: 'health', label: 'Saúde' },
    ];
    return (
      <article>
        <Form>
          <Input
            id="value"
            placeholder="Valor"
          />
          <Input
            id="description"
            placeholder="Descrição"
          />
          <Select
            id="currency"
            placeholder="Moeda"
            options={ coinsSelect }
          />
          <Select
            id="payment"
            placeholder="Método de pagamento"
            options={ paymentMethods }
          />
          <Select
            id="expense"
            placeholder="Tag"
            options={ tags }
          />
        </Form>
      </article>
    );
  }

  render() {
    return (
      <Main>
        {this.renderHeader()}
        <section>
          {this.renderForm()}
        </section>
      </Main>
    );
  }
}

Wallet.propTypes = {
  fetchData: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCoins()),
});
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
