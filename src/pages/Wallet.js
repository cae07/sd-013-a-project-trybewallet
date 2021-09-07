import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import SubmitBtn from '../components/SubmitBtn';
import fetchAPI from '../services/index';
import { saveState, fetchApiThunk } from '../actions/index';

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
      expenses: {
        valor: 0,
        descrição: 'PIX',
        moeda: 'USD',
        pagamento: 'Dinheiro',
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
    console.log('PREVPROPS', prevProps);
    if (!prevState.quotation.length && quotation !== []) {
      const FILTER = ['USDT'];
      this.filterQuotations(quotation, FILTER);
    }
  }

  onChange({ target: { value, name } }) {
    // Pega última string de name e coloca em minúsculo para ficarem no padrão de this.state.expenses
    // Ex.: (Método de Pagamento) => (pagamento), (Valor) => (valor)
    const property = name.toLowerCase().split(' ').pop();
    // propriedade valor precisa ser numérica
    this.setState({ [property]: (property === 'valor' ? Number(value) : value) });
  }

  onClick(e) {
    e.preventDefault();
    // const { saveExpense, fetchApiWithThunk, id, currencies } = this.props;
    // fazer o fetch para pegar a cotação atual com o THUNK
    const { expenses } = this.state;
    fetchApiWithThunk(expenses);
    // const { moeda, valor, tag, pagamento, descrição, quotation } = this.state;
    // saveExpense(({
    // expenses: { id, moeda, tag, descrição, pagamento, valor, exchangeRates: currencies },
    // currencies: quotation.map(({ code }) => code),
    // }));
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
    const { valor, descrição, moeda, pagamento, tag } = expenses;
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
  saveExpense: (payload) => dispatch(saveState(payload)),
  fetchApiWithThunk: (walletState) => dispatch(fetchApiThunk(walletState)),
});

const mapStateToProps = ({ wallet: { expenses, currencies } }) => ({
  id: expenses.length,
  currencies,
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
