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
  card: {
    paddingBottom: '2vmin'
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
        <div class="travelContainer">
          {this.props.countryInfo.map((info, index) => (
            <div key={index}>
              <Typography variant="h5" component="h4">
              <u>
                    Advisory Status
                </u>
              </Typography>
              <Typography component="p">{info.advisoryText}</Typography>
              <br></br>
              {/* <br></br> */}
              <Typography variant="h5" component="h4">
              <u>
                    Vaccine Considerations
                </u>
              </Typography>
              {info.health.diseasesAndVaccinesInfo.Vaccines.map(
                (description, index) => (
                  <Card key={index}>
                    <Typography variant="h6" component="h6">
                    {description.category}
                    </Typography>
                    <Typography component="p">
                    {description.description}
                    </Typography>
                  </Card>
                )
              )}
              <br></br>
              <Typography variant="h5" component="h4">
                <u>
                    Entry and Exit Requirements
                </u>
              </Typography>
              <br></br>
              {/* <Typography component="p">{info.entryExitRequirement.description}</Typography> */}
              {info.entryExitRequirement.requirementInfo.map(
                (description, index) => (
                  <Card key={index}>
                    <Typography variant="h6" component="h6">
                    {description.category}
                    </Typography>
                    <Typography component="p">
                    {description.description}
                    </Typography>
                    <br></br>
                  </Card>
                )
              )}
            </div>
          ))}
        </div>
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
