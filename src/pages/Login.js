import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import FormLogin from '../components/FormLogin';
import { setInfoLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(param) {
    const { history, dispatchSetInfo } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetInfo
    dispatchSetInfo(param);
    history.push('/carteira');
  }

  render() {
    return (
      <div className="container">
        <FormLogin onSubmitForm={ this.onSubmitForm } />
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetInfo: (infoUser) => dispatch(setInfoLogin(infoUser)),
});

export default connect(null, mapDispatchToProps)(Login);
