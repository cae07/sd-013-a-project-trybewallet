// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// class Header extends React.Component {
//   componentDidMount() {
//     this.totalValue();
//   }

//   totalValue() {
//     const { fullArray } = this.props;
//     const total = fullArray.reduce((count, current) => {
//       const expense = current.currency;
//       console.log(expense);
//       const objRates = current.exchangeRates[expense];
//       const askRates = objRates.ask;
//       const number = parseInt(current.value, 10);
//       const valueExchange = number * askRates;
//       count += valueExchange;
//       return count;
//     }, 0);
//     return total.toFixed(2);
//   }

//   render() {
//     const { email } = this.props;
//     return (
//       <header>
//         <div data-testid="email-field">{ email }</div>
//         <div data-testid="total-field">{ this.totalValue() }</div>
//         <div data-testid="header-currency-field">BRL</div>
//       </header>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   email: state.user.email,
//   fullArray: state.wallet.expenses,
// });

// Header.propTypes = ({
//   email: PropTypes.string.isRequired,
//   fullArray: PropTypes.string.isRequired,
// });

// export default connect(mapStateToProps)(Header);
