import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <header>
        Ok
      </header>
    );
  }
}

const mapStateToProps = () => ({ });

export default connect(mapStateToProps, null)(Header);
