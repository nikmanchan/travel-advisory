import React, { Component } from "react";
import {connect} from 'react-redux';
import CountrySelect from "../CountrySelect/CountrySelect";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Travel Advisory</h1>
        <CountrySelect />
      </div>
    );
  }
}

export default connect()(App);