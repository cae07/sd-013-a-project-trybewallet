import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputWallet from '../components/InputWallet';
import SelectGroup from '../components/SelectGroup';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'Teste',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.localGetCurrencies = this.localGetCurrencies.bind(this);
  }

  componentDidMount() {
    this.localGetCurrencies();
  }

  async localGetCurrencies() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    this.setState({
      loading: false,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, propCurrencies } = this.props;
    console.log(propCurrencies);
    const { value, description, currency, payment, tag, loading } = this.state;
    return (
      <>
        <Header email={ email } />
        <form>
          <InputWallet
            label="Valor:"
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <InputWallet
            label="Descrição:"
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
          {loading === false
            ? (
              <SelectGroup
                currency={ currency }
                payment={ payment }
                tag={ tag }
                handleChange={ this.handleChange }
                propCurrencies={ propCurrencies }
              />
            )
            : null}
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  getCurrencies: PropTypes.func.isRequired,
  propCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Wallet.defaultProps = {
  email: '',
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  propCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// https://github.com/facebook/prop-types/issues/212
