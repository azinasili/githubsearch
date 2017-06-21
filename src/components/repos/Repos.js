import React, { Component } from 'react';
import './Repos.css';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      returnLength: 10,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.repos !== nextProps.repos.items) {
      this.setState({repos: nextProps.repos.items});
    }
  }

  render() {
    let repos;
    let repoList;
    if (this.state.repos !== undefined && this.state.repos.length > 0) {
      repoList = this.state.repos.splice(0, this.state.returnLength);
      repos = repoList.map((repo) => {
        return <li key={repo.id}>{repo.name}</li>
      });
    }

    return (
      <div className="Repos">
        <ul>{repos}</ul>
      </div>
    );
  }
}

export default Repos;
