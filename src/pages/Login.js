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
      // user: {
      //   email: '',
      // },
    };
  }

  emailChange = (e, type) => {
    this.setState({
      inputEmail: e.target.value,
    });
    if (e.target.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) &&
    this.state.inputPassword.length > 5){
      this.setState({
        buttonEnable: true,
      });
  };
  if (!e.target.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
      this.setState({
        buttonEnable: false,
      });
  };
    // console.log(e.target.value)
  };

  passwordChange = (e, type) => {
    this.setState({
      inputPassword: e.target.value,
    });
    // console.log();
    if (e.target.value.length > 5 && 
      this.state.inputEmail.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      ){
      this.setState({
        buttonEnable: true,
      });
  };
  if(e.target.value.length < 6 ) {
    this.setState({
      buttonEnable: false,
    });
  };
}

  // botao precisa de uma funcao para o Dispatch(action) que altera o store
  entrarOnClick = () => {
    // this.setState({
    //   user:{email:this.inputEmail,
    //   }
    // });
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

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  handleLoginEmail: (payload) => dispatch(loginAction(payload))
})

export default connect(null, mapDispatchToProps)(Login);

// export default Login;
