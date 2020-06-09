import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Logout from './Logout'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar
} from "@material-ui/core";

import "../App.css"
const styles = theme => ({
  row: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  container: {
    width: 1170,
    margin: "auto"
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1"
  },

  NavBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#fff",
    backgroundSize: "cover"
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent"
    }
  },

  avatar: {
    height: "100%",
    borderRadius: 0
  },

  loginButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",

    "&:hover": {
      background: "blue",
      boxShadow: "0px 2px 10px #888888"
    }
  }
});


class Navbar extends React.Component {
  state = {
    anchorEl: null
  };

  logOut (e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
}

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log(event.currentTarget);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Button className={[classes.mainLogo]}>
                  <Avatar
                    src="./pictures/hotel.png"
                    className={classes.avatar}
                  />
                </Button>
              </Grid>
              <Button component={Link} to="/login" color="inherit" className={classes.buttonFontSize}>
                Login
              </Button>
              <Button component={Link} to="/register" color="inherit" className={classes.buttonFontSize}>
                Register
              </Button>
              <Button component={Link} to="/general-info" color="inherit" className={classes.buttonFontSize}>
                General Info
              </Button>
              <Button
                color="inherit"
                component={Link} to="/landing"
                className={[classes.buttonFontSize, classes.loginButton]}
              >
                Calculator
              </Button>
              <Logout />
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar)
