import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  render() {
    const { coins, loading } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          { loading
            ? <option value="carregando">Carregando...</option>
            : coins.map((coin) => (
              <option
                key={ coin }
                value={ coin }
              >
                { coin }
              </option>
            ))}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  loading: state.wallet.isLoading,
});

export default connect(mapStateToProps, null)(SelectCurrency);
