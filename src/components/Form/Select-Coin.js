// Requisito 7 feito com a ajuda de Murilo Rainho.
// Object.keys + map feito baseado em exemplo: https://stackoverflow.com/questions/44952663/react-propttypes-object-of-objects

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCoin extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
          {
            Object.keys(currencies).map((currencie, index) => {
              if (currencie !== 'USDT') {
                return <option key={ index }>{currencie}</option>;
              }
              return null;
            })
          }
        </select>
      </label>
    );
  }
}

SelectCoin.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCoin);
