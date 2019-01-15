import React, { Component } from "react";
import "./CountrySelect.css";
import axios from "axios";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TravelContent from "../TravelContent/TravelContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
  state = {
    country: "",
    advisoryState: "",
    countryInfo: []
  };

  handleChange = property => event => {
    this.setState({
      [property]: event.target.value
    });
    axios
      .get(
        `https://api.tugo.com/v1/travelsafe/countries/${event.target.value}`,
        {
          headers: {
            "X-Auth-API-Key": "pzxtdae4ap3rd4sswp6uhdk2",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response =>

        this.setState({
          countryInfo: response.data
        }),
        // console.log(response.data)

        // this.props.dispatch({
        //   type: "CHOOSE_COUNTRY",
        //   payload: response.data
        // }),
        // this.props.dispatch({
        //   type: 'SHOW_INFO',
        //   payload: 'true'
        // })
      );
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Countries</InputLabel>
            <Select
              value={this.state.country}
              onChange={this.handleChange("country")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ID">Indonesia</MenuItem>
              <MenuItem value="TH">Thailand</MenuItem>
              <MenuItem value="PH">Phillippines</MenuItem>
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="JP">Japan</MenuItem>
              <MenuItem value="HK">Hong Kong</MenuItem>
              <MenuItem value="AU">Australia</MenuItem>
              <MenuItem value="NZ">New Zealand</MenuItem>
              <MenuItem value="GB">United Kingdom</MenuItem>
              <MenuItem value="IE">Ireland</MenuItem>
              <MenuItem value="IS">Iceland</MenuItem>
              <MenuItem value="PT">Portugal</MenuItem>
              <MenuItem value="ES">Spain</MenuItem>
              <MenuItem value="GR">Greece</MenuItem>
              <MenuItem value="IT">Italy</MenuItem>
              <MenuItem value="DE">Germany</MenuItem>
              {/* <MenuItem value='CA'>Canada</MenuItem> */}
              <MenuItem value="MX">Mexico</MenuItem>
            </Select>
            <FormHelperText>Choose a country</FormHelperText>
          </FormControl>
        </form>
        {/* <TravelContent 
        countryInfo = {this.countryInfo}
        /> */}
            {/* <Paper className={classes.root} elevation={1}> */}
            <Typography variant="h5" component="h3">
                Advisories
            </Typography>
            <Typography component="p">
                Publish Date: {this.state.countryInfo.publishedDate}
            </Typography>
            <Typography component="p">
                Status: {this.state.countryInfo.advisoryText}
            </Typography>
            <Typography component="p">
                Recent Updates: {this.state.countryInfo.recentUpdates}
            </Typography>
            {/* <Typography component="p">
                Vaccines: {this.state.health.diseasesAndVaccinesInfo.vaccines}
            </Typography> */}
            {/* </Paper> */}

        {/* <p>{this.state.countryInfo.advisoryText}</p> */}
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
