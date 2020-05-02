import React, { Component } from 'react';
import Usersitem from './Usersitem';
import { Container, Row, Col } from 'reactstrap';

class Users extends Component {
  state = {
    Users: [
      {
        login: 'mojombo',
        id: 1,
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        login: 'defunkt',
        id: 2,
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
        login: 'pjhyett',
        id: 3,
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        login: 'wycats',
        id: 4,
        avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
        html_url: 'https://github.com/wycats',
      },
    ],
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.Users.map((user) => (
              <Col xs={6} md={4} lg={3}>
                <Usersitem key={user.id} user={user} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Users;
