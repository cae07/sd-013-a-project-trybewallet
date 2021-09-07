import React from 'react';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr />
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);
