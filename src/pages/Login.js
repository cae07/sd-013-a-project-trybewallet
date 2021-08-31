import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import { putUser } from '../actions';

const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
const passwordMaxLength = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = { ...user, redirect: false };

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick() {
    this.setState({ redirect: true });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    const { pushUser } = this.props;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form>
        <div className="emailForm" />
        <label htmlFor="email">
          Email
          <input
            type="text"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            id="email"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
            name="password"
            value={ password }
            id="password"
            required
          />
        </label>
        <button
          className="btn"
          type="button"
          disabled={ !REG_EX_EMAIL.test(email) || password.length < passwordMaxLength }
          onClick={ () => {
            pushUser({ email, password });
            this.onClick();
          } }
        >
          Entrar
        </button>

      </form>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  pushUser: (state) => (dispatch(putUser(state))),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

Login.propTypes = {
  pushUser: Proptypes.func.isRequired,
  user: Proptypes.shape({
    email: Proptypes.string,
    password: Proptypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// REG_EX_EMAIL Src = https://github.com/tryber/sd-013-a-project-trybewallet/commit/5a34a421a7986a7d4b91d93fd084b7a8a5b4bc58 PEDRO ALLES
