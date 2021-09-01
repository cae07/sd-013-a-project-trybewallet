import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchApi } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;

    fetchApi();
  }

  mapPropsToOption() {
    const { currencies } = this.props;

    return (currencies.map((currencie) => {
      if (currencie === 'USDT') return null;
      return (
        <option key={ currencie } data-testid={ currencie }>
          {currencie}
        </option>
      );
    }));
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input name="valor" id="valor" type="number" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input name="descrição" id="descrição" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              {this.mapPropsToOption()}
            </select>
          </label>
          <label htmlFor="pagamento">
            método de pagamento
            <select id="pagamento" aria-label="método de pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão">Cartão de crédito</option>
              <option value="CartãoDebito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            {' '}
            <select name="tag" id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(actionFetchApi()) });

Form.propTypes = {
  currencies: PropTypes.shape,
}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
