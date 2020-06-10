import React from "react"
import Button from "@material-ui/core/Button"
import {
    Link
  } from "react-router-dom";


function landing() {
    return (
        <>
        <div className='landing-header'>
        <div className="presentation">
            <div className="main-text">
                <div className="title">
                GhosTown
                </div>
                <div className="text">
                Helping New-Yorkers assess post-corona shared apartment risks and opportunities with AI driven technology.
                </div>
            </div>
        </div>
        <Button  component={Link} to="/Calculator" type="button" variant="contained" color="secondary">Test Me</Button>
        </div>
        </>
    )
}

export default landing;


