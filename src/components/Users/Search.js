import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onCange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('please enter something', 'primary ');
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block rounded"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
