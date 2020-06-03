import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className=" xcard grid">
          <div className=" ">
            <div className="row">
              <div class="all-center col-lg-5 col-md-4 col-sm-4 col-xs-12 ">
                <img
                  src={avatar_url}
                  className="round-img"
                  alt="user avatar"
                  style={{ width: '150px' }}
                ></img>
                <h1>{name}</h1>
                <p>
                  {' '}
                  <strong>location: </strong> {location}{' '}
                </p>
              </div>

              <div class="col-lg-7 col-md-8 col-sm-7 col-xs-12 ">
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}

                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>User name: </strong>
                        {login}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company: </strong>
                        {company}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Blog: </strong>
                        {blog}
                      </Fragment>
                    )}
                  </li>
                </ul>
                <a href={html_url} className="btn btn-dark my-1">
                  Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" xcard grid text-center">
          <div className="badge Palette-1">Followers: {followers} </div>
          <div className="badge Palette-2">Following: {following} </div>
          <div className="badge Palette-3">Public Repos: {public_repos} </div>
          <div className="badge Palette-4">public Gists: {public_gists} </div>
        </div>
        <div className=" xcard  ml-10px">
          <div>
            <strong>Last Repos</strong>
          </div>
          <Repos repos={repos} />
        </div>
      </Fragment>
    );
  }
}

export default User;
