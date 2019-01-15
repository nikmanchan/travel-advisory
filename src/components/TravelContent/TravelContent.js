import React, { Component } from "react";
import "./TravelContent.css";
// import axios from "axios";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// jss styles
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class TravelContent extends Component {

    handleClick = () => {
        console.log(this.props.countryInfo);
        
    }

  render() {
    const { classes } = this.props;

    return (
      <div> 
            <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
                Advisories
            </Typography>
            <Typography component="p">
                {/* {this.props.countryInfo.advisoryText} */}
            </Typography>
            </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
//   countryInfo: state.countryInfo,
  showInfo: state.showInfo
});

// needed for jss styles
TravelContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(TravelContent));
