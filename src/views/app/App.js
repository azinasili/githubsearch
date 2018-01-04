import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserResultLength, getRepoResultLength } from '../../actions/getResultLength';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';
import Panel from '../../containers/panel/Panel';
import Users from '../../components/users/Users';
import Repos from '../../components/repos/Repos';
import Message from '../../components/message/Message';
import './App.css';

function mapStateToProps(state) {
  return {
    message: state.defaultMessage,
    users: state.users.items,
    repos: state.repos.items,
    mobileView: state.mobileView,
    resultLength: state.searchResultLength,
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleUserSelect = this.handleUserSelect.bind(this);
    this.handleReposSelect = this.handleReposSelect.bind(this);
  }

  handleUserSelect(event) {
    const SELECT_VALUE = parseInt(event.target.value, 0);
    this.props.dispatch(getUserResultLength(SELECT_VALUE));
  }

  handleReposSelect(event) {
    const SELECT_VALUE = parseInt(event.target.value, 0);
    this.props.dispatch(getRepoResultLength(SELECT_VALUE));
  }

  componentWillMount() {
    this.props.dispatch(getUserResultLength);
    this.props.dispatch(getRepoResultLength);
  }

  render() {
    let userCheck = this.props.users.length > 0;
    let repoCheck = this.props.repos.length > 0;
    let message = <Message message={this.props.message} />;
    let users = (
      <Panel
        title={this.props.mobileView[0].title}
        handleSelect={this.handleUserSelect}
        selectValue={this.props.resultLength.users}
        active={this.props.mobileView[0].selected}>
          <Users />
      </Panel>
    );
    let repos = (
      <Panel
        title={this.props.mobileView[1].title}
        handleSelect={this.handleReposSelect}
        selectValue={this.props.resultLength.repos}
        active={this.props.mobileView[1].selected}>
          <Repos />
      </Panel>
    );

    return (
      <div className="App">
        <Header />
        {!userCheck && !repoCheck ? message : false}
        {userCheck ? users : false}
        {repoCheck ? repos : false}
        {userCheck && repoCheck ? <Footer /> : false}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
