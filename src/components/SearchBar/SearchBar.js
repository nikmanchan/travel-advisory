import React, { Component } from "react";
import "./SearchBar.css";
import axios from "axios";

class SearchBar extends Component {
  state = {
    country: "",
    advisoryState: "",
    climateInfo: []
  };

  handleChange = property => event => {
    this.setState({
      [property]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.country);

    axios
      .get(
        `https://api.tugo.com/v1/travelsafe/countries/${this.state.country}`,
        {
          headers: {
              "X-Auth-API-Key": "pzxtdae4ap3rd4sswp6uhdk2", 'Access-Control-Allow-Origin': '*'
            }
        }).then(response => 
            // console.log(response.data)
            
        this.setState({
            advisoryState: response.data.advisories.description,
            climateInfo: response.data.climateInfo,
            

        }),
        console.log(this.advisoryState)
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input
            placeholder="country"
            value={this.state.country}
            onChange={this.handleChange("country")}
            />
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <p>Country: {this.state.country}</p>
        <p>Advisory: {this.state.advisoryState}</p>
      </div>
    );
  }
}

export default SearchBar;
