// import React from 'react';
// import { Link } from 'react-router-dom';

// class LoginHome extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       email: '',
//       password: '',
//       disabled: true,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.validBtn = this.validBtn.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     }, () => this.validBtn());
//   }

//   validateEmail(email) {
//     const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//     if (!isValid || email.lenght === 0) {
//       return 'Invalid email.';
//     }
//     return '';
//   }

//   validatePassword(password) {
//     const isValidPass = password.match(/^(?=.*[a-za-z])(?=.*\d)[a-za-z\d]{6,}$/i);
//     if (!isValidPass || password.lenght === 0) {
//       return 'A senha deve conter 6 caracter incluindo letras e numeros.';
//     }
//     return '';
//   }

//   validBtn() {
//     const { email, password } = this.state;
//     const isValidEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
//     const isValidPass = /^(?=.*[a-za-z])(?=.*\d)[a-za-z\d]{6,}$/i;

//     if (isValidEmail.test(email) && isValidPass.test(password)) {
//       this.setState({
//         disabled: false,
//       });
//     } else {
//       this.setState({
//         disabled: true,
//       });
//     }
//   }

//   render() {
//     const { email, password, disabled } = this.state;
//     return (
//       <section>
//         <form action="">
//           <label htmlFor="email">
//             Email:
//             <input
//               type="email"
//               value={ email }
//               name="email"
//               id="email"
//               data-testid="email-input"
//               required="required"
//               onChange={ this.handleChange }
//             />
//             <span className="">{this.validateEmail(email)}</span>
//           </label>
//           <br />
//           <label htmlFor="password">
//             Password:
//             <input
//               type="password"
//               value={ password }
//               name="password"
//               id="password"
//               data-testid="password-input"
//               onChange={ this.handleChange }
//             />
//             <span className="">{this.validatePassword(password)}</span>
//           </label>
//           <button type="button" disabled={ disabled }>
//             <Link to="/carteira">Entrar</Link>
//           </button>
//         </form>
//       </section>
//     );
//   }
// }
// export default LoginHome;
