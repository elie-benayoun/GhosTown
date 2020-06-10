import React from 'react';
import Paper from "@material-ui/core/Paper"
import Grid from '@material-ui/core/Grid';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { green } from '@material-ui/core/colors';

export function Success(props) {
    return (
        <div>
            <Paper variant="outlined">
            <Grid container alignItems='center' justify='center'>
                <Grid xs={12}>
                    <div style={{textAlign: 'center'}}>
                    <div>According to Our prediction  your AirBnb is safe</div>
                    <ThumbUpIcon style={{ fontSize: 150, color: "limegreen" }}/>
                    <div>Your chances to succeed is : {props.data[1]}</div>
                    </div>
                    </Grid>
                    
                {/* <Grid xs={6}>According to Our prediction  your AirBnb is safe</Grid> */}
            </Grid>
            </Paper>
        </div>
    )
}


export function Fail(props) {
    return (
        <div>
            <Paper variant="outlined">
            <Grid container alignItems='center' justify='center'>
                <Grid xs={12}>
                    <div style={{textAlign: 'center'}}>
                    <div>According to Our prediction  your AirBnb is in a bad situation</div>
                    <ThumbDownIcon style={{ fontSize: 150, color: "#f50057" }}/>
                    <div>Your chances to succeed are : {props.data[0][1]*100.toString()}</div>
                    </div>
                    </Grid>
                    
                {/* <Grid xs={6}>According to Our prediction  your AirBnb is safe</Grid> */}
            </Grid>
            </Paper>
        </div>
    )
}
