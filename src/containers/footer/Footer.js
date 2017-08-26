import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchView } from '../../actions/switchMobileView';
import Nav from '../../components/navigation/Navigation';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
  }

  switchView(id) {
    this.props.dispatch(switchView(id));
  }

  render() {
    return (
      <footer className="Footer">
        <Nav
          links={this.props.mobileView}
          switchView={this.switchView}/>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.mobileView,
  };
}

export default connect(mapStateToProps)(Footer);
