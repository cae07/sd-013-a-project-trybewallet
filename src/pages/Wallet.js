import React from 'react';
import SelectCoin from '../components/SelectCoin';
import SelectPay from '../components/SelectPay';
import SelectTag from '../components/SelectTag';
import { fetchCoin } from '../actions';
import Input from '../components/Input';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header data-testid="email-field">
          <span>
            { email }
          </span>
          <span>
            TrybeWallet
          </span>
        </header>
        <div data-testid="total-field">
          0
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <form>
          <Input
            label="Valor"
          />
          <Input
            label="Descrição"
          />
          <SelectCoin />
          <SelectPay />
          <SelectTag />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoin()),
});

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  getCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
