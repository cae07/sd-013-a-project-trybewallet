import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputWallet from '../components/InputWallet';
import SelectGroup from '../components/SelectGroup';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'Teste',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.props;
    const { value, description, currency, payment, tag } = this.state;
    return (
      <>
        <Header email={ email } />
        <form>
          <InputWallet
            label="Valor:"
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <InputWallet
            label="Descrição:"
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <SelectGroup
            currency={ currency }
            payment={ payment }
            tag={ tag }
            handleChange={ this.handleChange }
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: '',
};

export default connect(mapStateToProps)(Wallet);
