import React, { Component } from "react";
import "./TravelContent.css";
// import axios from "axios";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// jss styles
const styles = theme => ({
  card: {
    paddingBottom: "2vmin"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class TravelContent extends Component {
  handleClick = () => {
    console.log(this.props.countryInfo);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="travelContainer">
          {this.props.countryInfo.map((info, index) => (
            <div key={index}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Advisory Status
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                  {info.advisoryText}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Vaccine Considerations
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                {info.health.diseasesAndVaccinesInfo.Vaccines.map(
                (description, index) => (
                    <p>
                        <strong>{description.category}</strong>:
                        &nbsp;
                        <span>{description.description}</span>
                    </p>
                
                )
              )}
                    </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <Typography variant="h5" component="h4">
                <u>Vaccine Considerations</u>
              </Typography>
              {info.health.diseasesAndVaccinesInfo.Vaccines.map(
                (description, index) => (
                <div className="vaccineDisplay" key={index}>
                    <div className="vaccineCells">
                        <Typography variant="h6" component="h6">
                        {description.category}
                        </Typography>
                        <Typography component="p">
                        {description.description}
                        </Typography>
                    </div>
                </div>
                )
              )}
              <br />
              <Typography variant="h5" component="h4">
                <u>Entry and Exit Requirements</u>
              </Typography>
              <br />
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
                    <br />
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
