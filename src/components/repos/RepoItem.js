import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
  return (
    <Fragment>
      <a
        className=" btn btn-outline-primary mr-3 "
        href={repo.html_url}
        role="button"
      >
        {repo.name}
      </a>
    </Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
