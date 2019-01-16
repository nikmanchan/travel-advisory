import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class Navbar extends Component {


  render() {
    // declared for later styling of content
    // const { classes } = this.props;


    return (
        <div>

        </div>
    );
  }
}

const mapStateToProps = state => ({
    countryInfo: state.countryInfo
  });

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(connect(mapStateToProps)(Navbar));