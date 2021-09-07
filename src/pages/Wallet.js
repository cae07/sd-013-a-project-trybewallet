import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import SubmitBtn from '../components/SubmitBtn';
import fetchAPI from '../services/index';
import { fetchApiThunk } from '../actions/index';

const quotationURL = 'https://economia.awesomeapi.com.br/json/all';
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.filterQuotations = this.filterQuotations.bind(this);
    this.handleQuotation = this.handleQuotation.bind(this);
    this.onClick = this.onClick.bind(this);
    this.propertyTranslation = this.propertyTranslation.bind(this);
    this.state = {
      quotation: [],
      expenses: {
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
  }

  async componentDidMount() {
    const quotations = await fetchAPI(quotationURL);
    this.handleQuotation(quotations);
  }

  componentDidUpdate(prevProps, prevState) {
    const { quotation } = this.state;
    if (!prevState.quotation.length && quotation !== []) {
      const FILTER = ['USDT'];
      this.filterQuotations(quotation, FILTER);
    }
  }

  onChange({ target: { value, name } }) {
    const property = this.propertyTranslation(name);
    this.setState((prevState) => ({ expenses:
        { ...prevState.expenses,
          ...{ [property]: value } } }));
  }

  onClick(e) {
    e.preventDefault();
    const { fetchApiWithThunk, id } = this.props;
    const { expenses } = this.state;
    fetchApiWithThunk({ ...expenses, id });
  }

  propertyTranslation(name) {
    switch (name) {
    case 'Valor':
      return 'value';
    case 'Método de pagamento':
      return 'method';
    case 'Descrição':
      return 'description';
    case 'Moeda':
      return 'currency';
    default:
      return name.toLowerCase();
    }
  }

  filterQuotations(quotationOptions = {}, properties = []) {
    properties.forEach((property) => delete quotationOptions[property]);
    this.setState({ quotation: Object.values(quotationOptions) });
  }

  handleQuotation(quotations) {
    this.setState({ quotation: quotations });
  }

  render() {
    const { quotation, expenses } = this.state;
    const { value, description, currency, method, tag } = expenses;
    if (!quotation.length) {
      return <Header />;
    }
    return (
      <div>
        <Header />
        <form>
          <InputField
            name="Valor"
            testid="valor-input"
            type="text"
            placeholder="0"
            onChange={ this.onChange }
            value={ value }
          />
          <InputField
            name="Descrição"
            testid="descrição-input"
            type="text"
            placeholder="Descrição"
            onChange={ this.onChange }
            value={ description }
          />
          <SelectField
            name="Moeda"
            options={ quotation }
            onChange={ this.onChange }
            value={ currency }
          />
          <SelectField
            name="Método de pagamento"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.onChange }
            value={ method }
          />
          <SelectField
            name="Tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            onChange={ this.onChange }
            value={ tag }
          />
        </form>
        <SubmitBtn name="Adicionar despesa" onClick={ this.onClick } isValid />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiWithThunk: (walletState) => dispatch(fetchApiThunk(walletState)),
});

const mapStateToProps = ({ wallet: { expenses } }) => ({
  id: expenses.length,
});

Wallet.propTypes = {
  quotations: PropTypes.arrayOf(PropTypes.number),
  moeda: PropTypes.number,
  tag: PropTypes.string,
  descrição: PropTypes.string,
  pagamento: PropTypes.string,
  valor: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
