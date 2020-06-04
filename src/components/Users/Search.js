import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onCange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something', 'secondary ');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <input
            className="rounded mb row-contant"
            type="text"
            name="text"
            value={text}
            onChange={onCange}
            placeholder="Search Users"
          />
        </div>

        <div className="form-group">
          {' '}
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block rounded  row-contant mt"
          />
        </div>
      </form>
      {showClear && (
        <button
          className="btn btn-light btn-block rounded"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
