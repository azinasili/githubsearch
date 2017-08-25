import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchToUsers, switchToRepos } from '../../actions/switchMobileView';
import Nav from '../../components/navigation/Navigation';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.switchUserView = this.switchUserView.bind(this);
    this.switchRepoView = this.switchRepoView.bind(this);
  }

  switchUserView(event) {
    event.preventDefault();
    this.props.dispatch(switchToUsers());
  }

  switchRepoView(event) {
    event.preventDefault();
    this.props.dispatch(switchToRepos());
  }

  render() {
    return (
      <footer className="Footer">
        <Nav
        active={this.props.userView ? this.props.userView : this.props.repoView}
        switchUserView={this.switchUserView}
        switchRepoView={this.switchRepoView} />
      </footer>
    );
  }
}


function mapStateToProps(state) {
  return {
    userView: state.mobileView.users,
    repoView: state.mobileView.repos,
  };
}

export default connect(mapStateToProps)(Footer);
