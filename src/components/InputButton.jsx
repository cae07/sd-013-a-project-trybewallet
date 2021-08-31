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
      <div>
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
const mapDispatchToProps = (dispatch) => ({
  sendSpences: (payload) => dispatch(enviaSpences(payload)),
  fazOFetch: (state) => dispatch(fetchExpenses(state)),

});

export default connect(null, mapDispatchToProps)(InputButton);
