import React, { useContext } from 'react';
import Usersitem from './Usersitem';
import Spinner from '../layout/Spinner';
import { Container, Row, Col } from 'reactstrap';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
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

export default Users;
