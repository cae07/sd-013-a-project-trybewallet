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

    this.onSubmit = this.onSubmit.bind(this);
    this.handleEdition = this.handleEdition.bind(this);
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
        {editing ? <EditPayment onSubmit={ this.onSubmit } id={ id } /> : <AddPayment />}
        <PaymenTable handleEdition={ this.handleEdition } />
      </>
    );
  }
}

export default Wallet;
