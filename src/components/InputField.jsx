import React from 'react';
import { withStyles,makeStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export const CSSTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'grey',
      borderColor: 'grey'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
      borderColor: 'grey'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: 'grey',
        borderWidth: '2px'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
        borderWidth: '2px'
      },
    },
  },
})(TextField);