import React from 'react';
import PropTypes from 'prop-types';

class SelectCurrency extends React.Component {
  render() {
    const { value, options, isLoading, errorFetch, changeEvent } = this.props;

    console.log(`erro no Fetch: ${errorFetch}`);

    if (isLoading) {
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
            options.map((coin) => (
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  changeEvent: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errorFetch: PropTypes.bool.isRequired,
};

export default SelectCurrency;
