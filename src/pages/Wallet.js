import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, InputSelect, Header } from '../components';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const listTag = [
      { id: '1', value: 'alimentação', title: 'Alimentação' },
      { id: '2', value: 'lazer', title: 'Lazer' },
      { id: '3', value: 'trabalho', title: 'Trabalho' },
      { id: '4', value: 'transporte', title: 'Transporte' },
      { id: '5', value: 'saúde', title: 'Saúde' },
    ];
    const paymentMethods = [
      { id: '1', value: 'dinheiro', title: 'Dinheiro' },
      { id: '2', value: 'credito', title: 'Cartão de crédito' },
      { id: '3', value: 'debito', title: 'Cartão de débito' },
    ];
    const { email } = this.props;
    return (
      <>
        <Header email={ email } />
        <section>
          <form className="pure-form">
            <Input label="Valor" />
            <Input label="Descrição" />
            <InputSelect
              label="Moeda"
              listSelect={ [{ id: '1', title: 'teste', value: 'n.a' },
                { id: '2', title: 'teste', value: 'n.a' }] }
            />
            <InputSelect
              label="Método de pagamento"
              listSelect={ paymentMethods }
            />
            <InputSelect
              label="Tag"
              listSelect={ listTag }
            />
          </form>
        </section>
      </>

    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
