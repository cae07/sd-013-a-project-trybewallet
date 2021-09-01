import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ListExpenses extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const { user, wallet } = this.props;
  //   this.state = { wallet, user };
  // }

  render() {
    const { wallet: { expenses } } = this.props;
    if (expenses.length === 0) return <div>DEFAULT</div>;
    return (
      <div>
        {expenses.map(({ value, description, currency, method, tag, id }) => (
          <div style={ { display: 'flex' } } key={ id }>
            <p>{value}</p>
            <p>{description}</p>
            <p>{currency}</p>
            <p>{method}</p>
            <p>{tag}</p>
          </div>
        ))}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   APIResponse: (payload) => (dispatch(API_RESPONSE(payload))),
//   dispatchDados: (payload) => (dispatch(addExpenses(payload))),
// });

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

ListExpenses.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.number),
    expenses: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(ListExpenses);
