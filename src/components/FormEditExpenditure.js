import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Input, Select } from './index';
import { updtExpense, totalUpdate } from '../actions';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormEditExpenditure extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      method: '',
      tag: '',
      currency: '',
      exchangeRates: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate() {
    const { totalDidUpdate } = this.props;
    totalDidUpdate();
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { value, description, tag, method, currency, exchangeRates } = this.state;
    const { id, handleSubmitUpate, totalDidUpdate } = this.props;

    if (!value || !description) {
      return 'Por favor preencha todos os campos!';
    }

    const validadeValue = () => {
      const numberValid = value.match('^[0-9]');
      if (!numberValid || value.length === 0) {
        return true;
      }
      return false;
    };

    if (validadeValue()) {
      return '';
    }

    const data = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    handleSubmitUpate(data);
    totalDidUpdate();
    return 'Editado com sucesso';
  }

  updateState() {
    const { list, expense, id } = this.props;
    const test = expense.find((exp) => exp.id === id);
    const { value, currency, method, tag, description, exchangeRates } = test;
    this.setState({
      value,
      description,
      currency,
      tag,
      method,
      exchangeRates,
    });
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
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
          <button data-testid="edit-btn" type="submit" value="Adicionar Despesa" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpate: (data) => dispatch(updtExpense(data)),
  totalDidUpdate: () => dispatch(totalUpdate()),
});
const mapStateToProps = ({ wallet }) => (
  {
    list: wallet.currencies,
    expense: wallet.expenses,
    id: wallet.edit.id,
  }
);

FormEditExpenditure.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditExpenditure);
