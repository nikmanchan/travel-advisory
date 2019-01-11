import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        country: ''
    }


  render() {

    return (
        
    <div>
        <input placeholder="Country" value={this.state.country}></input>
        <button>Submit</button>
    </div>
      
    );
  }
}

export default SearchBar;
