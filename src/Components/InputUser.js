import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // impoteiro o withRouter para poder manipular o history
import { saveEmail } from '../actions/index';

class InputUser extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  submitForm() {
    const { email } = this.state;
    const { saveEmailOnGlobalState, history } = this.props;

    saveEmailOnGlobalState(email);
    // agora mudo de pagina
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const passwordMin = 6;
    const passwordValid = password.length >= passwordMin;
    const emailValidation = () => {
      const valid = /\S+@\S+\.\S+/;
      return valid.test(email);
    };

    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            onChange={ this.handleChange }
            placeholder="Digite seu email"
            data-testid="email-input"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            name="password"
            type="password"
            onChange={ this.handleChange }
            placeholder="Digite sua senha"
            data-testid="password-input"
          />
        </label>

        <button
          type="submit"
          disabled={ !(emailValidation() && passwordValid) }
          onClick={ this.submitForm }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

InputUser.propTypes = {
  saveEmailOnGlobalState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  saveEmailOnGlobalState: (email) => {
    // saveEmail vai retornar um objeto com { type: BLA, payload: { email }}
    const actionWithEmail = saveEmail(email);

    // a gente DISPARA esse objeto para o redux
    dispatch(actionWithEmail);
  },
});

const InputUserWithRouter = withRouter(InputUser); // passei o componente dentro do whithRouter
// print de exemplo no dia 31/08 está no slack comigo mesma.
export default connect(null, mapDispatchToProps)(InputUserWithRouter);
