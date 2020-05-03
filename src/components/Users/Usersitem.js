import React from 'react';

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
          <a className="btn btn-dark btn-sm my-1" href={html_url}>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Usersitem;
