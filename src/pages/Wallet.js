import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from '../components/Forms';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <Header email={ email } />
        </header>
        <Forms />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
