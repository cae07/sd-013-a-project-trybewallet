import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputEmail, InputName } from '../components';
import { userAction } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      password: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validEmailPassword = this.validEmailPassword.bind(this);
  }

  handleSubmit(event) {
    const { updateUser, history } = this.props;
    // pega o email pra madna pra store.
    const email = document.getElementById('aligned-name');
    event.preventDefault();
    updateUser({ email: email.value });
    history.push('/carteira');
  }

  // Função resposavel por valida o email e a senha.
  validEmailPassword(event) {
    const { id, value } = event.target;

    const regexEmailValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const regexPasswordValid = /^[a-zA-Z0-9]{6}.*$/;

    if (id === 'aligned-name') {
      if (regexEmailValid.test(value)) {
        return this.setState({ email: true });
      }
      this.setState({ email: false });
    }

    if (id === 'aligned-password') {
      if (regexPasswordValid.test(value)) {
        return this.setState({ password: true });
      }
      this.setState({ password: false });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <section className="flex-user">
        <form
          onSubmit={ this.handleSubmit }
          className="pure-form pure-form-aligned"
        >
          <fieldset>
            <img
              className="image-user"
              src="https://image.flaticon.com/icons/png/512/149/149071.png"
              width="150px"
              alt=""
            />
            <InputName handleChange={ this.validEmailPassword } />
            <InputEmail handleChange={ this.validEmailPassword } />
            <div className="pure-controls">
              <button
                disabled={ (email && password) ? '' : 'true' }
                type="submit"
                className="pure-button pure-button-primary"
              >
                Entrar
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => dispatch(userAction(payload)),
});

Login.propTypes = {
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
