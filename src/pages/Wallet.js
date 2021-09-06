import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ExpenditureForm from '../components/ExpenditureForm';
import Header from '../components/Header';
import { addAPIExpense } from '../actions';

class Wallet extends React.Component {
  // Requisito 8: Passo 1 - Criar o constructor
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

  // Passo 2:
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // Passo 3: passar os estados locais via props para <ExpenditureForm>
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <section>
          <Header />
        </section>
        TrybeWallet
        <section>
          <ExpenditureForm
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
      </div>);
  }
}

Wallet.propTypes = {
  addExpenses: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (payload) => dispatch(addAPIExpense(payload)),
});

export default connect(null, mapDispatchToProps)(Wallet);
