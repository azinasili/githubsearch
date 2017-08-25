import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchToUsers, switchToRepos } from '../../actions/switchMobileView';
import Nav from '../../components/navigation/Navigation';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
  }

  switchView(event, id) {
    event.preventDefault();
    console.log(id);
    if (this.props.userView) this.props.dispatch(switchToUsers(id));
    if (this.props.repoView) this.props.dispatch(switchToRepos(id));
    console.log(this.props.mobileView);
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
    userView: state.mobileView[0].selected,
    repoView: state.mobileView[1].selected,
    mobileView: state.mobileView,
  };
}

export default connect(mapStateToProps)(Footer);
