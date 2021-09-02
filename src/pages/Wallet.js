import React from 'react';
import Header from '../components/Header';
import AddPayment from '../components/AddPayment';
import EditPayment from '../components/EditPayment';
import PaymenTable from '../components/PaymenTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      id: '',
    };
  }

  onSubmit() {
    this.setState({
      editing: false,
      id: '',
    });
  }

  handleEdition(id) {
    this.setState({
      editing: true,
      id,
    });
  }

  render() {
    const { editing, id } = this.state;
    return (
      <>
        <Header />
        {editing ? <EditPayment onClick={ this.onSubmit } id={ id } /> : <AddPayment />}
        <PaymenTable editing={ this.handleEdition } />
      </>
    );
  }
}

export default Wallet;
