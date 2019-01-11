import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        country: ''
    }

    handleChange = (property) => (event) => {
        this.setState({
            [property]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.country);
    }

  render() {

    return (

    <div>
            <input placeholder="country" value={this.state.country} onChange={this.handleChange('country')} ></input>
            <button onClick={this.handleSubmit}>Submit</button>
    </div>
      
    );
  }
}

export default SearchBar;
