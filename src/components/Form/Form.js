import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendExpenses, fetchCoins } from '../../actions';
import ButtonAdd from './ButtonAdd';
import InputsForm from './Inputs-form';
import SelectCoin from './Select-Coin';
import SelectPayment from './Select-payment';
import SelectTag from './Select-tag';
// import Table from '../components/Table'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick(e) {
    e.preventDefault();
    const { id } = this.state;
    const { dispatchExpenses, dispatchfetchCoin, wallet: { currencies } } = this.props;
    await dispatchfetchCoin();
    dispatchExpenses({ ...this.state, exchangeRates: currencies });
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag } = this.state;

    return (
      <div>
        <form>
          <InputsForm
            inputValue={ value }
            inputDescription={ description }
            onChange={ this.handleChange }
          />
          <SelectCoin
            selectCoin={ currency }
            onChange={ this.handleChange }
          />
          <SelectPayment
            selectPayment={ method }
            onChange={ this.handleChange }
          />
          <SelectTag
            selectTag={ tag }
            onChange={ this.handleChange }
          />
          <ButtonAdd onClick={ this.handleClick } />
        </form>
        {/* <Table /> */}
      </div>
    );
  }
}

Form.propTypes = {
  dispatchExpenses: PropTypes.func,
  dispatchfetchCoin: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (expenses) => dispatch(sendExpenses(expenses)),
  dispatchfetchCoin: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
