import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setInfoDespesa } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    return (
      <div className="Expense">
        <form>
          <label htmlFor="Valor">
            Valor:
            <input type="text" id="Valor" name="Valor" label="Valor" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select type="text" id="Moeda" name="Moeda" label="Moeda">
              { getCoins.map((coin) => (
                <option key={ coin }>{ coin }</option>)) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" onChange={ this.handleChange } className="form__field">
              { paymentMethods.map((method) => (
                <option key={ method }>{ method }</option>)) }
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              onChange={ this.handleChange }
              data-testid="method-input"
              id="tag"
              className="form__field"
            >
              { tags.map((tag) => (<option key={ tag }>{ tag }</option>)) }
            </select>
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" name="Descrição" label="Descrição" />
          </label>
          <button
            type="submit"
            className="btn float-right despesa_btn"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

// Expense.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }).isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  dispatchSetDespesa: (infoUser) => dispatch(setInfoDespesa(infoUser)),
});

export default connect(null, mapDispatchToProps)(Expense);
