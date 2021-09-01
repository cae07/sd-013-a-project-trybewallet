import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import user from '../reducers/user';
import loginAction from '../actions/loginAction';
// import {withRouter} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputEmail:'',
      inputPassword: '',
      buttonEnable: false,
      login:false,
    };
  }

  emailChange = (e, type) => {
    this.setState({
      inputEmail: e.target.value,
    });
    this.checkUsernamePassword();
    // console.log(e.target.value)
  };

  passwordChange = (e, type) => {
    this.setState({
      inputPassword: e.target.value,
    });
    // console.log();
    this.checkUsernamePassword();
}
  checkUsernamePassword = () => {
    const { inputEmail, inputPassword} = this.state;

    if (inputPassword > 5 && 
      inputEmail.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      ){
      this.setState({
        buttonEnable: true,
      });
      
    }else {
    this.setState({
      buttonEnable: false,
    });
  }
}

  // botao precisa de uma funcao para o Dispatch(action) que altera o store
  entrarOnClick = () => {

    const {handleLoginEmail} = this.props;
    handleLoginEmail(this.state.inputEmail);
    // this.props.history.push('/carteira')
    this.setState({
      login:true,
    })
    console.log(this.state)
  }
    

  render() {
    const {login} = this.state
    return (
      <div>

        <div data-testid="email-input">
          <input type="email" onChange= {this.emailChange} />
        </div>

        <div data-testid="password-input" onChange= {this.passwordChange}>
          <input type="password" />
        </div>
        <div>
          <button type="button" onClick={this.entrarOnClick} disabled={!this.state.buttonEnable}>Entrar</button>
        </div>
        {login ? <Redirect to='/carteira' />:''}
      
      </div>
    );
  }
};

// const mapStateToProps = (state) => ({
//   user: state.user,
// })

const mapDispatchToProps = (dispatch) => ({
  handleLoginEmail: (payload) => dispatch(loginAction(payload))
})

export default connect(null, mapDispatchToProps)(Login);
// export default Login;

