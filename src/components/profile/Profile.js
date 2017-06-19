import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    let avatar = this.props.profile.avatar_url ? <img src={this.props.profile.avatar_url} alt="Github profile avatar" className="Profile-image" /> : null;
    let name = this.props.profile.name ? <p>{this.props.profile.name}</p> : null;
    let login = this.props.profile.login ? <p className="Profile-meta-item">{this.props.profile.login}</p> : null;
    let blog = this.props.profile.blog ? <p className="Profile-meta-item"><a href={this.props.profile.blog} className="Profile-meta-value">{this.props.profile.blog}</a></p> : null;
    let company = this.props.profile.company ? <p className="Profile-meta-item">{this.props.profile.company}</p> : null;
    let location = this.props.profile.location ? <p>{this.props.profile.location}</p> : null;
    let bio = this.props.profile.bio ? <p>{this.props.profile.bio}</p> : null;
    let repos = this.props.profile.public_repos ? <p className="Profile-meta-item"><span className="Profile-meta-value">{this.props.profile.public_repos}</span><span className="Profile-meta-title">Repos</span></p> : null;
    let gists = this.props.profile.public_gists ? <p className="Profile-meta-item"><span className="Profile-meta-value">{this.props.profile.public_gists}</span><span className="Profile-meta-title">Gists</span></p> : null;
    let followers = this.props.profile.followers ? <p className="Profile-meta-item"><span className="Profile-meta-value">{this.props.profile.followers}</span><span className="Profile-meta-title">Followers</span></p> : null;
    let following = this.props.profile.following ? <p className="Profile-meta-item"><span className="Profile-meta-value">{this.props.profile.following}</span><span className="Profile-meta-title">Following</span></p> : null;

    return (
      <div className="Profile">
        {avatar}
        {
          name ? (
            <div className="Profile-content">
              {name}
              {
                login || blog || company ? (
                  <div className="Profile-meta">
                    {login}
                    {blog}
                    {company}
                  </div>
                ) : null
              }
              {location}
              {bio}
              {
                repos || gists || followers || following ? (
                  <div className="Profile-meta">
                    {repos}
                    {gists}
                    {followers}
                    {following}
                  </div>
                ) : null
              }
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default Profile;
