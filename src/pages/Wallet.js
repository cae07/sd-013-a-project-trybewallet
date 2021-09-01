import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: 0,
      currency: 'USD',
      value: 0,
      description: '',
      method: 'money',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { state } = this.props;
    const { user: { email } } = state;
    const { expenses, currency, value, description, method, tag } = this.state;
    console.log(expenses, currency, value, description, method, tag);
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h3 id="expenses" data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <WalletForm handleChange={ this.handleChange } />
      </div>);
  }
}

Wallet.propTypes = {
  state: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Wallet);
