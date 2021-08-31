import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { toast } from 'react-toastify';
import { Input, Select } from './index';
import { fetchCurrencies, addExpense, totalUpdate } from '../actions';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormAddExpenditure extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate() {
    const { totalDidUpdate } = this.props;
    totalDidUpdate();
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { handleSubmit, expenses } = this.props;
    const { value, description, tag, method, currency } = this.state;

    if (!value || !description) {
      return toast.warning('Por favor preencha todos os campos!');
    }

    const validadeValue = () => {
      const numberValid = value.match('^[0-9]');
      if (!numberValid || value.length === 0) {
        return true;
      }
      return false;
    };

    if (validadeValue()) {
      return toast.warn('Digite apenas números!');
    }

    const data = {
      id: expenses.length === 0 ? 0 : expenses[expenses.length - 1].id + 1,
      value,
      description,
      currency,
      method,
      tag,
    };

    handleSubmit(data);
    return toast.success('Adicionado com Sucesso!');
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    const { list } = this.props;

    return (
      <div>
        <form onSubmit={ this.onSubmitForm }>
          <Input
            label="Valor: "
            type="text"
            onChange={ this.changeHandler }
            value={ value }
            name="value"
          />
          <Select
            onChange={ this.changeHandler }
            value={ currency }
            label="Moeda: "
            name="currency"
            options={ [...list] }
          />
          <Select
            onChange={ this.changeHandler }
            value={ method }
            label="Método de Pagamento: "
            name="method"
            options={ paymentOptions }
          />
          <Select
            onChange={ this.changeHandler }
            value={ tag }
            label="Tag: "
            name="tag"
            options={ tagOptions }
          />
          <Input
            label="Descrição:"
            type="text"
            onChange={ this.changeHandler }
            value={ description }
            name="description"
          />
          <input type="submit" value="Adicionar Despesa" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => (
  {
    list: wallet.currencies,
    expenses: wallet.expenses,
  }
);

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  handleSubmit: (data) => dispatch(addExpense(data)),
  totalDidUpdate: () => dispatch(totalUpdate()),
});

FormAddExpenditure.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  totalDidUpdate: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpenditure);
