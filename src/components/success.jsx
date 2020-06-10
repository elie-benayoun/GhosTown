import React from 'react';
import Paper from "@material-ui/core/Paper"
import Grid from '@material-ui/core/Grid';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: '100%',
      marginLeft: '40px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


export function Success(props) {
    const classes = useStyles()
    return (
        <div>
            <Paper variant="outlined" className={classes.root}>
            <Grid container alignItems='center' justify='center'>
                <Grid xs={12}>
                    <div style={{textAlign: 'center'}}>
                    <div>According to Our prediction  your AirBnb is safe</div>
                    <ThumbUpIcon style={{ fontSize: 150, color: "limegreen" }}/>
                    <div>Your chances to succeed is : {(props.data[0][1]*100).toString()}</div>
                    </div>
                    </Grid>
                    
                {/* <Grid xs={6}>According to Our prediction  your AirBnb is safe</Grid> */}
            </Grid>
            </Paper>
        </div>
    )
}


export function Fail(props) {
    const classes = useStyles()
    return (
        <div>
            <Paper variant="outlined">
            <Grid container alignItems='center' justify='center'  className={classes.root}>
                <Grid xs={12}>
                    <div style={{textAlign: 'center'}}>
                    <div>According to Our prediction  your AirBnb is in a bad situation</div>
                    <ThumbDownIcon style={{ fontSize: 150, color: "#f50057" }}/>
                    <div>Your chances to succeed are : {(props.data[0][1]*100).toString()} %</div>
                    </div>
                    </Grid>
                    
                {/* <Grid xs={6}>According to Our prediction  your AirBnb is safe</Grid> */}
            </Grid>
            </Paper>
        </div>
    )
}


export function Default(props) {
    const classes = useStyles()
    return (
        <div>
            <Paper variant="outlined" className={classes.root}>
            <Grid container >
                <Grid xs={12}>
                    <div style={{textAlign: 'left', display: "flex", padding: '20px', marginTop: '90px'}}>
                    <div style={{textAlign: 'left', display: "inline-block", alignSelf: "flex-end", padding: '20px'}}>
                        <Typography gutterBottom variant="h6" component="h3" color="textSecondary" >Enter the details about your AirBNB in the form on the left. We will help you decide whether you should keep operating.

                            What we need from you: 
                                <ul>
                                    <li>Your address</li>
                                    <li>The minimum number of nights renters need to commit to</li>
                                    <li>How many days a year will the asset be available </li>
                                    <li>Price per night </li>
                                    <li>New York Borough </li>
                                    <li>Your asset type</li>

                                </ul>
                                </Typography>
                                <div style={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h6" component="h3" color="textSecondary" > Good luck!
                                </Typography>
                                </div></div>

            
                
                    </div>
                    </Grid>
                    
                {/* <Grid xs={6}>According to Our prediction  your AirBnb is safe</Grid> */}
            </Grid>
            </Paper>
        </div>
    )
}
