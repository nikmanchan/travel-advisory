import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import "typeface-roboto";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends Component {

    handleScrollTop = () => {
        document.documentElement.scrollTop = 0;
    }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <div className="navbarButtons">
              <Button onClick={this.handleScrollTop}>
                <Typography
                  variant="h5"
                  color="inherit"
                  className={classes.grow}
                >
                  <font color="white">Travel Advisory</font>
                </Typography>
              </Button>

              <Button color="inherit" >
                <IconButton>
                  <Close />
                </IconButton>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryInfo: state.countryInfo
});

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(Navbar));
