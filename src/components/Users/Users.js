import React from 'react';
import Usersitem from './Usersitem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Container>
          <Row>
            {users.map((user) => (
              <Col xs={6} md={4} lg={3} key={user.id}>
                <Usersitem user={user} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
