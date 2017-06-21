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
        return (
          <li key={repo.id} className="Repo">
            <div className="Repo-header">
              <p>{repo.full_name}</p>
              <div className="Repo-stats">
                <p className="Repo-stat">
                  <i className="Repo-stat-icon material-icons">star</i>
                  <span className="Repo-stat-value">{repo.stargazers_count}</span>
                </p>
                <p className="Repo-stat">
                  <i className="Repo-stat-icon material-icons">content_copy</i>
                  <span className="Repo-stat-value">{repo.forks}</span>
                </p>
                <p className="Repo-stat">
                  <i className="Repo-stat-icon material-icons">remove_red_eye</i>
                  <span className="Repo-stat-value">{repo.watchers}</span>
                </p>
              </div>
            </div>
            <p>{repo.description}</p>
            <p>Language: <span>{repo.language}</span></p>
          </li>
        );
      });
    }

    return (
      <div className="Repos">
        <ul className="Repos-list">{repos}</ul>
      </div>
    );
  }
}

export default Repos;
