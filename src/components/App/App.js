import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Travel Advisory</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
