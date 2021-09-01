import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CoinType from './componentsForms/CoinType';
import Description from './componentsForms/Description';
import PaymentType from './componentsForms/PaymentType';
import SpendingReason from './componentsForms/SpendingReason';
import Value from './componentsForms/Value';
import Button from './componentsForms/Button';
import { fetchCoinsWhitThunk } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      coin: '',
      method: '',
      reason: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { myCoins } = this.props;
    myCoins();
  }

  render() {
    const { value, description, coin, method, reason } = this.state;
    return (
      <form>
        <Value
          onChange={ (event) => this.handleChange(event) }
          value={ value }
        />
        <Description
          onChange={ (event) => this.handleChange(event) }
          value={ description }
        />
        <CoinType
          onChange={ (event) => this.handleChange(event) }
          value={ coin }
        />
        <PaymentType
          onChange={ (event) => this.handleChange(event) }
          value={ method }
        />
        <SpendingReason
          onChange={ (event) => this.handleChange(event) }
          value={ reason }
        />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

Form.propTypes = {
  myCoins: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  myCoins: () => dispatch(fetchCoinsWhitThunk()),
});

export default connect(null, mapDispatchToProps)(Form);
