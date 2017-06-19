import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img src={this.props.profile.avatar_url} alt="Github profile avatar" className="Profile-image" />
        <div className="Profile-content">
          <p>{this.props.profile.name}</p>
          <div className="Profile-meta">
            <p className="Profile-meta-item">{this.props.profile.login}</p>
            <p className="Profile-meta-item">
              <a href={this.props.profile.blog} className="Profile-meta-value">{this.props.profile.blog}</a>
            </p>
            {this.props.profile.company ? <p className="Profile-meta-item">{this.props.profile.company}</p> : ''}
          </div>
          <p className="Profile-meta-item">{this.props.profile.location}</p>
          <p>{this.props.profile.bio}</p>
          <div className="Profile-meta">
            <p className="Profile-meta-item">
              <span className="Profile-meta-value">{this.props.profile.public_repos}</span>
              <span className="Profile-meta-title">Repos</span>
            </p>
            <p className="Profile-meta-item">
              <span className="Profile-meta-value">{this.props.profile.public_gists}</span>
              <span className="Profile-meta-title">Gists</span>
            </p>
            <p className="Profile-meta-item">
              <span className="Profile-meta-value">{this.props.profile.followers}</span>
              <span className="Profile-meta-title">Followers</span>
            </p>
            <p className="Profile-meta-item">
              <span className="Profile-meta-value">{this.props.profile.following}</span>
              <span className="Profile-meta-title">Following</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
