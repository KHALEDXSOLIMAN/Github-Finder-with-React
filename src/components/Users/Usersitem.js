import React, { Component } from 'react';

class Usersitem extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    };
  }
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div>
        <div className="card text-center">
          <img
            className="round-img"
            style={{ width: '60px' }}
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
  }
}

export default Usersitem;
