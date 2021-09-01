import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchApiWithThunk } from '../actions';

class SelectCoin extends React.Component {
  componentDidMount() {
    const { getCoinAPI } = this.props;
    getCoinAPI();
  }

  render() {
    const { currencies } = this.props;

    const getCurrenciesArray = Object.keys(currencies);
    // Função que remove do array o Dólar Turismo (USDT)
    // function removeUSDT(coin) {
    //   if (coin !== 'USDT') {
    //     return coin;
    //   }
    // }

    // Filtrando os tipos de moeda que queremos mas excluindo a moeda USDT
    // const getSelectKeys = getKeys.filter(removeUSDT);
    return (
      <div>
        <label htmlFor="select-coin">
          Moeda
          <select required="required" id="select-coin">
            {getCurrenciesArray
              .map((item, index) => (
                item !== 'USDT' && <option value={ item } key={ index }>{item}</option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinAPI: () => dispatch(fetchApiWithThunk()),
});

SelectCoin.propTypes = {
  getCoinAPI: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(SelectCoin);
