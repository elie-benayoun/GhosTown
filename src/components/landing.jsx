import React from "react"
import Button from "@material-ui/core/Button"
import {
    Link
  } from "react-router-dom";


function landing() {
    return (
        <>
        <div className="presentation">
            <div className="main-text">
                <div className="title">
                    Lorem Ipsum
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus necessitatibus expedita cupiditate. Mollitia, temporibus hic totam ullam labore odit sint nostrum consectetur quasi, velit qui vero! Velit, provident autem.
                </div>
            </div>
        </div>
        <Button  component={Link} to="/Calculator" type="button" variant="contained" color="secondary">Test Me</Button>
        </>
    )
}

export default landing;


