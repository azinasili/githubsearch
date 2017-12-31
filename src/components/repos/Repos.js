import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Repos.css';

function mapStateToProps(state) {
  return {
    repos: state.repos.items,
    reposResultLength: state.searchResultLength.repos,
  };
}

class Repos extends Component {
  render() {
    let repos = null;

    if (this.props.repos !== undefined && this.props.repos.length > 0) {
      let repoList = this.props.repos.slice(0, this.props.reposResultLength);
      repos = repoList.map((repo) => {
        return (
          <li key={repo.id} className="Repo">
            <div className="Repo-header">
              <a href={repo.html_url} className="Repo-title">{repo.full_name}</a>
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
            <p className="Repo-description">{repo.description}</p>
            {repo.language ? <p className="Repo-languages">Language: <span>{repo.language}</span></p> : ''}
          </li>
        );
      });
    }

    return (
      <ul className="Repos-list">{repos}</ul>
    );
  }
}

export default connect(mapStateToProps)(Repos);
