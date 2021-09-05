import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      sumValue: 0,
    };
  }

  render() {
    const { myState } = this.props;
    const { sumValue } = this.state;
    return (
      <>
        <span data-testid="email-field">{ myState.email }</span>
        <p data-testid="total-field">{ sumValue }</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

Header.propTypes = {
  myState: PropTypes.objectOf(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  myState: state.user,
});

export default connect(mapStateToProps)(Header);
