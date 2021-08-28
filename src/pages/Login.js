import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>TrybeWallet</h1>
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <input type="text" className="form-control" placeholder="username" />
              <input type="password" className="form-control" placeholder="password" />
              <input type="submit" value="Entrar" className="btn float-right login_btn" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
