import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

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
    const { email, password } = this.state;
    const { putUser } = this.props;

    if (redirect) return <Redirect to="/Wallet" />;

    return (
      <fieldset>
        <div className="emailForm" />
        <label htmlFor="email">
          Email
          <input
            type="text"
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
          onClick={ async () => {
            await this.onClick();
            return putUser(this.state);
          } }
        >
          Enviar

        </button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  putUser: (state) => (dispatch(putUser(state))),
});

const mapStateToProps = (state) => ({
  user: state.Reducer.user,
});

Login.propTypes = {
  putUser: Proptypes.func.isRequired,
  user: Proptypes.shape({
    email: Proptypes.string,
    password: Proptypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
