import React, { Component } from 'react';
import Select from '../select/Select.js';
import './Repos.css';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      selectValue: 10,
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.repos !== nextProps.repos.items) {
      this.setState({repos: nextProps.repos.items});
    }
  }

  handleSelect(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    let repos;
    let repoList;
    if (this.state.repos !== undefined && this.state.repos.length > 0) {
      repoList = this.state.repos.slice(0, this.state.selectValue);
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
      <div className="Repos">
        <div className="Repos-header">
          <h2 className="Repos-title">Top {this.state.selectValue} Repositories</h2>
          <form className="Repos-switcher">
            <Select selectValue={this.state.selectValue} handleSelect={this.handleSelect} />
          </form>
        </div>
        <ul className="Repos-list">{repos}</ul>
      </div>
    );
  }
}

export default Repos;
