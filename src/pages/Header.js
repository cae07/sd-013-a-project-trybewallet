import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
//   constructor(props) {
//   super(props);

  render() {
    const { email } = this.props;
    // const {options} = this.state;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">
            {email}
          </h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>

        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" className="value" />
          </label>

          <label htmlFor="coin">
            Moeda:
            <select className="coin">
              <option value=" "> </option>
            </select>
          </label>

          <label htmlFor="payMethod">
            Método de Pagamento:
            <select className="payMethod">
              <option value="cash">Dinheiro</option>
              <option value="credicard">Cartão de Crédito</option>
              <option value="card">Cartão de Débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select className="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="health">Saúde</option>
            </select>
          </label>

        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
