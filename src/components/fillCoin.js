import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
// import getRateAPI from '../services/awesomeapi';
import { getApiThunk } from '../actions';

class FillCoin extends React.Component {
  componentDidMount() {
    const { getAPI } = this.props;
    getAPI();
  }

  render() {
    const { currencies } = this.props;
    const getCurrencies = Object.keys(currencies);
    return (
      <div>
        <label htmlFor="select-coin">
          Moeda
          <select required="required" id="select-coin">
            {getCurrencies
              .map((item, index) => (
              // Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo).
              // Preenche as options
                item !== 'USDT' && <option key={ index }>{item}</option>
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
  getAPI: () => dispatch(getApiThunk()),
});

FillCoin.propTypes = {
  getRateAPI: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FillCoin);
