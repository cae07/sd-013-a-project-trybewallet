/* eslint-disable no-useless-escape */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Topo extends React.Component {
  render() {
    // const { email } = this.props;
    return (
      <div className="topo">
        <h1>TrybeWallet</h1>
        <div>
          <p>
            Email:
          </p>
          <p>Despesa Total: </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// Topo.propTypes = {
//   email: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, null)(Topo);
