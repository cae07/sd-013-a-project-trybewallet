import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CoinType from './componentsForms/CoinType';
import Description from './componentsForms/Description';
import PaymentType from './componentsForms/PaymentType';
import SpendingReason from './componentsForms/SpendingReason';
import Value from './componentsForms/Value';
import Button from './componentsForms/Button';
import { updatedCoinsToStore, actionTest } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
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
    const { updateExpenses, test } = this.props;
    const expenses = this.state;
    updateExpenses(expenses);
    test();

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
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
          value={ currency }
        />
        <PaymentType
          onChange={ (event) => this.handleChange(event) }
          value={ method }
        />
        <SpendingReason
          onChange={ (event) => this.handleChange(event) }
          value={ tag }
        />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

Form.propTypes = {
  updateExpenses: PropTypes.func.isRequired,
  test: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  //  Auxiliado pelo Gabriel Gaspar - turma 13 A
  updateExpenses: (expenses) => dispatch(updatedCoinsToStore(expenses)),
  test: () => dispatch(actionTest()),
});

export default connect(null, mapDispatchToProps)(Form);
