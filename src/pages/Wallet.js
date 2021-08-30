import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletBody from './components/WalletBody';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      value: 0,
      d: '',
      payment: 'cash',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { savePairs } = this.props;
    savePairs();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses, value, d, payment, tag } = this.state;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{userEmail}</h4>
          <h4 data-testid="total-field">{totalExpenses}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <WalletBody
          totalExpenses={ totalExpenses }
          value={ value }
          d={ d }
          payment={ payment }
          tag={ tag }
          handleChange={ this.handleChange }
        />
      </div>);
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  savePairs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  savePairs: () => dispatch(getCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
