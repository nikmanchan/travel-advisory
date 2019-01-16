import React, { Component } from "react";
import "./TravelContent.css";
// import axios from "axios";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// jss styles
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class TravelContent extends Component {
  handleClick = () => {
    console.log(this.props.countryInfo);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          {this.props.countryInfo.map((info, index) => (
            <div key={index}>
            <Paper className={classes.root} elevation={1}>
              <Typography component="p">Status: {info.advisoryText}</Typography>
              <Typography component="h4">
              Considerations
              </Typography>
              {info.health.diseasesAndVaccinesInfo.Vaccines.map(
                (description, index) => (
                  <Typography component="p" key={index}>
                    <span>{description.category}:</span> &nbsp;
                    <span>{description.description}</span>
                  </Typography>
                  
                )
              )}
              <p>{info.health.description}</p>
              </Paper>
            </div>
          ))}
        </div>
        
        {/* <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Advisories
          </Typography>
          <Typography component="p">
            {this.props.showInfo.advisoryText}
          </Typography>
        </Paper> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryInfo: state.countryInfo
  //   showInfo: state.showInfo
});

// needed for jss styles
TravelContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(TravelContent));
