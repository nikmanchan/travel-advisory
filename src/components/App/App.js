import React, { Component } from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import "./App.css";
import 'typeface-roboto';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

class App extends Component {


  render() {
    // const { classes } = this.props;


    return (
      <div>
        <Typography component="h4" variant="h4" gutterBottom className="App-Header">
          Travel Advisory
        </Typography>
        {/* Country Select Form */}
        <CountrySelect />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);