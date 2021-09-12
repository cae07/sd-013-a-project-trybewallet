import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Currency from './componentForms/Currency';
import Description from './componentForms/Description';
import Paycheck from './componentForms/Paycheck';
import Tag from './componentForms/Tag';
import Value from './componentForms/Value';
import { actionGetCoinsWithThunk } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      paycheck: 'Dinheiro',
      tag: 'Alimentação',
      fetch: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchCurrencys = this.fetchCurrencys.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencys();
  }

  fetchCurrencys() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => (
        response
          .json()
          .then((data) => {
            this.setState({
              fetch: data,
            });
          })
      ));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { spendingToStore } = this.props;
    spendingToStore(this.state);
    this.setState((prevState) => ({
      id: prevState + 1,
      value: '',
      description: '',
      currency: '',
      paycheck: 'Dinheiro',
      tag: 'Alimentação',
      fetch: [],
    }));
  }

  render() {
    const {
      value,
      description,
      currency,
      paycheck,
      tag,
      fetch,
    } = this.state;

    return (
      <form className="mb-3 form-submits row">
        <Value
          onChange={ (event) => this.handleChange(event) }
          value={ value }
        />
        <Description
          onChange={ (event) => this.handleChange(event) }
          description={ description }
        />
        <Currency
          onChange={ (event) => this.handleChange(event) }
          currency={ currency }
          fetch={ fetch }
        />
        <Paycheck
          onChange={ (event) => this.handleChange(event) }
          paycheck={ paycheck }
        />
        <Tag
          onChange={ (event) => this.handleChange(event) }
          tag={ tag }
        />
        <div className="col">
          <button
            type="button"
            onClick={ this.handleClick }
            className="btn button-submit"
          >
            Enviar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  spendingToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  spendingToStore: (spendings) => dispatch(actionGetCoinsWithThunk(spendings)),
});

export default connect(null, mapDispatchToProps)(Form);
