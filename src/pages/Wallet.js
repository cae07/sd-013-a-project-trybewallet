import React from 'react';
import Forms from '../components/Forms';
import Header from '../components/Header';
import { addAPIExpense } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  async onSubmitForm(event) {
    event.preventDefault();
    const { addExpenses } = this.props;
    await addExpenses(this.state);
    this.setState((previousState) => ({
      id: previousState.id + 1,
      value: '',
      description: '',
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          TrybeWallet
        </div>
        <div>
          <section>
          <Forms 
            value={ value }
            description={ description }
            currency={ currency }
            method={ method }
            tag={ tag }
            handleChange={ this.handleChange }
          />
          <button type="submit" onClick={ this.onSubmitForm }>
            Adicionar despesa
          </button>
        </section>
        </div>
      </div>
    )
  }
}

Wallet.propTypes = {
  addExpenses: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (payload) => dispatch(addAPIExpense(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
