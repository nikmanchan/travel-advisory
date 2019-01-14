import React, { Component } from "react";
import "./SearchBar.css";
import axios from "axios";
// import curl from 'curl';

// let config = {
//     headers: {"X-Auth-API-Key" : "jwjs2jxp2bxuh9m37bd8npp5"}
// };

class SearchBar extends Component {
  state = {
    country: "",
    advisoryState: ""
  };

  handleChange = property => event => {
    this.setState({
      [property]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.country);

    // curl -i -H 'Content-Type: application/x-www-form-urlencoded'  'https://api.tugo.com/v1/travelsafe/countries/GR'  -H "X-Auth-API-Key:abcdefghijklmnopqrstuvwxy"

    axios
      .get(
        `https://api.tugo.com/v1/travelsafe/countries/${this.state.country}`,
        {
          headers: {
              "X-Auth-API-Key": "pzxtdae4ap3rd4sswp6uhdk2", 'Access-Control-Allow-Origin': '*'
            }
        }).then(response => 
        this.setState({
            advisoryState: response.data.advisories.description
        }),
        console.log(this.advisoryState)
    );
  };

  render() {
    return (
      <div>
        <input
          placeholder="country"
          value={this.state.country}
          onChange={this.handleChange("country")}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <p>Country: {this.state.country}</p>
        <p>Advisory: {this.state.advisoryState}</p>
      </div>
    );
  }
}

export default SearchBar;
