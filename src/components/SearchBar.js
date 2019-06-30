import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit= e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Image search</label>
            <input 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })} 
              type="text" 
              id="search" 
              placeholder="Search..." />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
