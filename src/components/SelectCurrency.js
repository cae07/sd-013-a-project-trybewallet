import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  render() {
    const { coins, loading, value, changeEvent } = this.props;

    if (loading) {
      return (
        <label htmlFor="currency">
          <select name="currency" id="currency">
            <option value="">Carregando...</option>
          </select>
        </label>
      );
    }

    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          value={ value }
          id="currency"
          onChange={ changeEvent }
        >
          {/* <option value="BRL">BRL</option> */}
          {
            coins.map((coin) => (
              <option
                key={ coin }
                value={ coin }
              >
                { coin }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  changeEvent: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  loading: state.wallet.isLoading,
});

export default connect(mapStateToProps, null)(SelectCurrency);
