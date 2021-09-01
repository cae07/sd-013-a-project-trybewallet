import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputWallet from '../components/InputWallet';
import SelectGroup from '../components/SelectGroup';
import { fetchAPI, addAPIExpense } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      // loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.localGetCurrencies = this.localGetCurrencies.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    this.localGetCurrencies();
  }

  async onSubmitForm(event) {
    event.preventDefault();
    const { addExpenses } = this.props;
    await addExpenses(this.state);
    this.setState((previousState) => ({
      id: previousState.id + 1,
    }));
  }

  async localGetCurrencies() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    // this.setState({
    //   loading: false,
    // });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, propCurrencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
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
          {propCurrencies.length !== 0
            ? (
              <SelectGroup
                currency={ currency }
                method={ method }
                tag={ tag }
                handleChange={ this.handleChange }
                propCurrencies={ propCurrencies }
              />
            )
            : null}
          <button type="submit" onClick={ this.onSubmitForm }>Adicionar despesa</button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  getCurrencies: PropTypes.func.isRequired,
  propCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  addExpenses: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  email: '',
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  addExpenses: (payload) => dispatch(addAPIExpense(payload)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  propCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// Prevent Default
// https://stackoverflow.com/questions/8664486/javascript-code-to-stop-form-submission
