import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
  return (
    <div className="badge bg-primary">
      <a className="btn" href={repo.html_url} style={{ color: '#fff' }}>
        {repo.name}{' '}
      </a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
