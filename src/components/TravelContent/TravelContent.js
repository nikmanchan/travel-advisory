import React, { Component } from "react";
import "./TravelContent.css";
// import axios from "axios";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// jss styles
const styles = theme => ({
  container: {

  },
  root: {

  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    paddingTop: "4vmin"
  }
});

class CountrySelect extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  country: state.country
});

// needed for jss styles
CountrySelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(CountrySelect));
