import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

class general extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                Some General informations About the situation of AirBnb in New York
                       <Paper elevation={3}>
                            <img src="./pictures/prices.jpeg" alt="prices"/>
                            <div>The average nightly price for an Airbnb listing in NY went down by 3%, from 152$ to 147$. This is the result of the two forces: less listings in the market (lower supply) and less people using AirBNB (less demend)</div>
                       </Paper>
            </div>
        )
    }
}

export default general
