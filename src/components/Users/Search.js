import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = { text: '' };
  PropTypes = { searchUsers: PropTypes.func.isRequired };

  onCange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            className="rounded"
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onCange}
            placeholder="Search Users"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
