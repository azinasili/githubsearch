import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserResultLength, getRepoResultLength } from './actions/getResultLength';
import Header from './containers/header/Header';
import Panel from './containers/panel/Panel';
import Users from './components/users/Users';
import Repos from './components/repos/Repos';
import Message from './components/message/Message';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleUserSelect = this.handleUserSelect.bind(this);
    this.handleReposSelect = this.handleReposSelect.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getUserResultLength);
    this.props.dispatch(getRepoResultLength);
  }

  handleUserSelect(event) {
    const SELECT_VALUE = parseInt(event.target.value, 0);
    this.props.dispatch(getUserResultLength(SELECT_VALUE));
  }

  handleReposSelect(event) {
    const SELECT_VALUE = parseInt(event.target.value, 0);
    this.props.dispatch(getRepoResultLength(SELECT_VALUE));
  }

  render() {
    let userCheck = this.props.users.length > 0;
    let repoCheck = this.props.repos.length > 0;
    let message = <Message message={this.props.message} />;
    let users = <Panel title="Users" handleSelect={this.handleUserSelect} selectValue={this.props.usersResultLength}><Users /></Panel>;
    let repos = <Panel title="Repositories" handleSelect={this.handleReposSelect} selectValue={this.props.reposResultLength}><Repos /></Panel>;

    return (
      <div className="App">
        <Header />
        {!userCheck && !repoCheck ? message : false}
        {userCheck ? users : false}
        {repoCheck ? repos : false}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.defaultMessage,
    users: state.users.items,
    repos: state.repos.items,
    usersResultLength: state.searchResultLength.users,
    reposResultLength: state.searchResultLength.repos,
  };
}

export default connect(mapStateToProps)(App);
