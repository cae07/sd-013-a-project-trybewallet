import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { emailInput } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">
            {emailInput}
          </h2>
          <h2 data-testid="total-field">
            {0}
          </h2>
          <h2 data-testid="header-currency-field">
            BRL
          </h2>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              id="valor"
              type="text"
              placeholder="Valor"
            />
          </label>
          <label htmlFor="despesa">
            Descrição
            <input
              id="despesa"
              type="text"
              placeholder="Despesa"
            />
          </label>
          <Form />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  emailInput: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
});
export default connect(mapStateToProps)(Wallet);
