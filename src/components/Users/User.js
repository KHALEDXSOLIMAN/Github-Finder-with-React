import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GihubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GihubContext);
  const { getUser, user, loading, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

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
  } = user;

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
            <div className="all-center col-lg-5 col-md-4 col-sm-4 col-xs-12 ">
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

            <div className="col-lg-7 col-md-8 col-sm-7 col-xs-12 ">
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
};

export default User;
