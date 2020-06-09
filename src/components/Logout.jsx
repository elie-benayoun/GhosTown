import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import '../App.css'

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
})

class Logout extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/login`)
    }

    render () {
        const { classes } = this.props;
        return (

        //     <button onClick={this.logOut.bind(this)} className="logout">
        //     Logout
        // </button>
                      <Button onClick={this.logOut.bind(this)} color="inherit" className={classes.buttonFontSize}>
                      Log out
                    </Button>
        )
    }
}

export default withRouter((withStyles(styles)(Logout)))