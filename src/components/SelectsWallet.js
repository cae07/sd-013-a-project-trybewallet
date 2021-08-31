import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectsWallet extends React.Component {
  render() {
    const { currencies } = this.props;
    const selectCur = [];
    Object.entries(currencies).map((currencie) => {
      if (currencie[0] !== 'USDT') {
        selectCur.push(currencie[0]);
        return selectCur;
      }
      return selectCur;
    });
    return (
      <form>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
          >
            {selectCur.map((curr) => <option key={ curr }>{ curr }</option>)}
          </select>

        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

SelectsWallet.propTypes = {
  currencies: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectsWallet);
