import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
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

  renderSelects() {
    const { isLoading, currencies } = this.props;
    const mapCurrenciesToCode = currencies.map((currency) => currency.code);
    return (
      <>
        <Select
          label="Moeda:"
          name="currency"
          options={ mapCurrenciesToCode }
          onChange={ this.handleChangeInput }
          isLoading={ isLoading }
        />
        <Select
          label="Método de pagamento:"
          name="payment"
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
        <form
          onSubmit={ (event) => {
            event.preventDefault();
            console.log(this.state);
          } }
        >
          <Input
            label="Valor:"
            name="value"
            type="text"
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
          {this.renderSelects()}
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
});

Wallet.propTypes = {
  handleGetCurrencies: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
