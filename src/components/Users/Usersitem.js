import React from 'react';
import { Link } from 'react-router-dom';

const Usersitem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div>
      <div className="card text-center">
        <img
          className="round-img"
          style={{ width: '60px', alignSelf: 'center' }}
          src={avatar_url}
          alt=""
        ></img>
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Usersitem;
