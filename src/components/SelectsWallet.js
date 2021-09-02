/* import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectsWallet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tag: 'Alimentação',
      method: 'Dinheiro',
      currency: 'USD',
      exchangeRates: {},
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
    this.updateCurrencies();
  }

  updateCurrencies = () => {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies })
  }

  render() {
    const { currencies } = this.props;
    const { exchangeRates } = this.state;
    //console.log(currencies);
    console.log(exchangeRates)

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
            onChange={ this.handleChange }
          >
            {selectCur.map((curr) => <option key={ curr }>{ curr }</option>)}
          </select>

        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            onChange={ this.handleChange }
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

/*     let teste = Object.entries(currencies).filter((currencie) => {
      return currencie[0] === 'CAD';
    }).map((currencie) => currencie[1]);
    teste = teste.reduce((acc, index) => {
      console.log(acc);
      return index;
    }, {});
    console.log(teste.ask)
       /*let teste = Object.entries(currencies).map((currencie) => currencie[1]);
    console.log(teste);
    teste.forEach((test) => console.log(test.name.split('/')[0]))
    let teste2 = teste.reduce((acc, index) => {
    console.log(acc);
      return acc = {
        code: index.code,
        name: index.name.split('/')[0],
        ask: index.ask,
      }
    },{})
    console.log(teste2);
    /*let teste = Object.entries(currencies).filter((currencie) => {
      return currencie[0] === 'CAD';
    }).map((currencie) => currencie[1]);
    teste = teste.reduce((acc, index) => {
      console.log(acc);
      return index;
    }, {});
    console.log(teste)

SelectsWallet.propTypes = {
  currencies: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectsWallet); */
