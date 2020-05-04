import React, { Component } from 'react';
import Usersitem from './Usersitem';
import { Container, Row, Col } from 'reactstrap';

class Users extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.props.users.map((user) => (
              <Col xs={6} md={4} lg={3} key={user.id}>
                <Usersitem user={user} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Users;
