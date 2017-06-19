import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img src={this.props.profile.avatar_url} alt="Github profile avatar" />
        <p>{this.props.profile.login}</p>
        <p>{this.props.profile.name}</p>
        <p>{this.props.profile.company}</p>
        {/*<a href={this.props.profile.blog}>{this.props.profile.blog}</a>*/}
        <p>{this.props.profile.location}</p>
        {/*<a href={this.props.profile.email}>{this.props.profile.email}</a>*/}
        <p>{this.props.profile.bio}</p>
        <p>public repos: {this.props.profile.public_repos}</p>
        <p>public gists: {this.props.profile.public_gists}</p>
        <p>followers: {this.props.profile.followers}</p>
        <p>following: {this.props.profile.following}</p>
      </div>
    );
  }
}

export default Profile;
