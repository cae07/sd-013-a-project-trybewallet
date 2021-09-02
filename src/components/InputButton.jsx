import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpenses, enviaSpences } from '../actions/walletActions';

class InputButton extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { state, sendSpences, contadorClick, fazOFetch } = this.props;
    sendSpences(state);
    contadorClick();
    fazOFetch(state);
  }

  render() {
    return (
      <div className="input-form button">
        <button
          type="button"
          onClick={ this.onClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

InputButton.propTypes = {
  state: PropTypes.objectOf().isRequired,
  sendSpences: PropTypes.func.isRequired,
  contadorClick: PropTypes.func.isRequired,
  fazOFetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendSpences: (payload) => dispatch(enviaSpences(payload)),
  fazOFetch: (state) => dispatch(fetchExpenses(state)),

});

export default connect(null, mapDispatchToProps)(InputButton);
