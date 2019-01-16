import React, { Component } from "react";
import {connect} from 'react-redux';
import CountrySelect from "../CountrySelect/CountrySelect";
import "./App.css";
import 'typeface-roboto';

class App extends Component {


  render() {
    return (
      <div>
        <h1>Travel Advisory</h1>
        <CountrySelect />
        {/* <TravelContent /> */}
      </div>
    );
  }
}

export default connect()(App);