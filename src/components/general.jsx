import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import MediaCard from "./cards"

class general extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="main-general">
                <div>
                    Some General informations About the situation of AirBnb in New York
                </div>
                <div className="pictures_container">
                    <div className="upper_part">
                            <MediaCard image="./pictures/prices.jpeg" title="" description="The average nightly price for an Airbnb listing in NY went down by 3%, from 152$ to 147$. This is the result of the two forces: less listings in the market (lower supply) and less people using AirBNB (less demend)"/>
                            <MediaCard image="./pictures/market.jpeg" title="" description="The number of total stayings went down in the entire market, as proxied by the number of reviews for each number of listings"/>
                            <MediaCard image="./pictures/guest.jpeg" title="" description="The number of days the AirBNB listings were opened for guests went down to zero for many apartments, and went up to ~100, ~200 and 365 days for some apartments. This suggests the market shifted to more long term stayings."/>
                    </div>
                </div>
            </div>
        )
    }
}

export default general
