import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import SubmitBtn from '../components/SubmitBtn';
import fetchAPI from '../services/index';
import { fetchCurrency } from '../actions/index';

const quotationURL = 'https://economia.awesomeapi.com.br/json/all';
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.filterQuotations = this.filterQuotations.bind(this);
    this.handleQuotation = this.handleQuotation.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      quotation: [],
      valor: 0,
      descrição: 'PIX',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
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
    const property = name.toLowerCase().split(' ').pop();
    this.setState({ [property]: (property === 'valor' ? Number(value) : value) });
  }

  onClick(e) {
    e.preventDefault();
    const { saveExpense, id } = this.props;
    const { moeda, valor, tag, pagamento, descrição } = this.state;
    saveExpense(({ expenses: { id, moeda, tag, descrição, pagamento, valor } }));
  }

  filterQuotations(quotationOptions = {}, properties = []) {
    properties.forEach((property) => delete quotationOptions[property]);
    this.setState({ quotation: Object.values(quotationOptions) });
  }

  handleQuotation(quotations) {
    this.setState({ quotation: quotations });
  }

  render() {
    const { quotation, valor, descrição, moeda, pagamento, tag } = this.state;
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
            type="number"
            placeholder="0"
            onChange={ this.onChange }
            value={ valor }
          />
          <InputField
            name="Descrição"
            testid="descrição-input"
            type="text"
            placeholder="Descrição"
            onChange={ this.onChange }
            value={ descrição }
          />
          <SelectField
            name="Moeda"
            options={ quotation }
            onChange={ this.onChange }
            value={ moeda }
          />
          <SelectField
            name="Método de pagamento"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.onChange }
            value={ pagamento }
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
  saveExpense: (payload) => dispatch(fetchCurrency(payload)),
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
