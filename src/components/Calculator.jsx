
import React from "react";
import Button from '@material-ui/core/Button';
// import { addStudent } from '../lib/api'
import { Formik } from "formik";
import * as Yup from "yup";
import { withStyles } from '@material-ui/core/styles';
import MultipleSelect from './MultipleSelect'
import Typography from '@material-ui/core/Typography';
import Error from "./Error";
import axios from "axios"
import {CSSTextField} from './InputField'
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper"
import Grid from '@material-ui/core/Grid';
import {Success} from "./success"
import {Fail} from "./success"
import {Default} from "./success"

const ValidationSchema = Yup.object().shape({
    // first_name: Yup.string()
    // .min(1, "Too Short!")
    // .max(50, "Too Long!")
    // .required("Required"),

    // last_name: Yup.string()
    // .min(1, "Too Short!")
    // .max(50, "Too Long!")
    // .required("Required"),

    neighbourhood_group: Yup.string()
    .required("Required"),

    room_type: Yup.string()
    .required("Required"),

    // interested_in_course: Yup.array()
    // .required("Required"),

    availibility_days: Yup.number()
    .positive()
    .integer()
    .typeError("must be a number")
    .min(1, "Invalid.")
    .max(365, "Invalid."),

    min_nights: Yup.number()
    .positive()
    .integer()
    .typeError("must be a number")
    .min(1, "Invalid.")
    .max(365, "Invalid."),

    price: Yup.number()
    .positive()
    .integer()
    .typeError("must be a number")
    .min(1, "Invalid.")
    .max(15000, "Invalid.")
    
  });
  

const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "26ch",
      color: "black"
    }
}
})

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     background: "green",
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });


class InputForm1 extends React.Component {
    state = {
            name: []
          };
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          text: '',
          date: '',
          buttoncolor: 'primary',
          errorMessage: false,
          options: [],
          adress:"",
          adressData:{},
          result:2,
          resultData:[]
        };
      }

    getCurrentDate() {    
        const tempDate = new Date();
        const currDate = tempDate.toISOString();
        return currDate;       
      }

    handleOnSubmit(values) {
        console.log('i exist')
        // addStudent(values)
    }

    debounce(debounceFunction, delay) {
        console.log(delay)
        var timer = null;
        clearTimeout(timer);
        timer = setTimeout(function() {
            debounceFunction();
            }, delay
            
            );
    
      }

      handleSelectChange = event => {
    this.setState({ name: event.target.value });
  };

  searchAdress(search){
    this.setState({adress:search})
    this.debounce( ()=>{
        if (search.length==0){
            this.setState({options:[]})
        }
        else{
            axios.get(`https://us1.locationiq.com/v1/search.php?key=4667f9ab1d0d71&q=${search}&format=json`)
            .then(res=>{
                this.setState({options:res.data})
        
            })
        }

    },1000

    )
}

saveAdress(adres){
    this.setState({adress:adres.display_name,adressData:adres,options:[]})
}

    render() {
        return (
          // <div>
         <div className="calculator_flex">
            {/* <Grid container spacing={3}>
            <Grid item xs={8} sm={4} spacing={3}>  */}
          <Paper elevation={3}>
            <div className="paper">
            <Formik
              initialValues={{ min_nights: "", availibility_days: "", price: "",adresslat:"",adresslong:"", neighbourhood_group: "", room_type: "",}}
                validationSchema={ValidationSchema}
              validate={values => {
                let errors = {};
                 if (values.min_nights.length == 0) {
                    errors.min_nights = `Wrong Value`;
                  }  if (values.price.length == 0) {
                        errors.price = `Wrong Value`;
                  } if (values.adresslat.length==0){
                    errors.adresslat = `Wrong Value`;
                  } if (values.adresslong.length==0){
                    errors.adresslong = `Wrong Value`;
                  }
                return errors;
              }}
             onSubmit={async (values, { setSubmitting, resetForm }) => {
                this.setState({buttoncolor: 'inherit'})
                this.setState({errorMessage : false})
                // const datetime = this.getCurrentDate()
                // resetForm();
                // addStudent(values)
                let a = values.toString()
                console.log(a)
                console.log(values)
                this.setState({buttoncolor: 'primary'})
                axios.post("http://localhost:5000/calculator" , values)
                .then(res=>{
                  console.log(res)
                  this.setState({result:res.data[1][0] , resultData:res.data[0]})
                })
                }}
              >
            
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                resetForm,
                isSubmitting,
              }) => (
            <form className={`${styles.root}`} style={{ color: 'red' }} autoComplete="off" onSubmit={handleSubmit}>



                <>
                    <div className="inputadress">
                        <input className="inputfield"
                            value={this.state.adress}
                            placeholder="address"
                            onChange={(event)=>{this.searchAdress(event.target.value)}}
                            
                    />
                    <Paper elevation={3}>
                    <div className="inputitem">
                    {this.state.options.map(adress=>{
                        return(
                            <div className="adressitem" onClick={()=>{
                                this.saveAdress(adress)
                                values.adresslong=adress.lon
                                values.adresslat=adress.lat
                            }}>
                                {adress.display_name}
                            </div>
                            )
                        })}
                    </div> 
                    </Paper>   
                    </div>
                </>
                <Error touched={touched.adresslat} message={errors.adresslat} />


                <CSSTextField
                    style = {{width: 310, marginTop: 30}}
                    name="min_nights"
                    id="min_nights"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.min_nights}
                    // color={this.state.buttoncolor}
                    placeholder='minimum number of nights'
                  >
                    ), }} ><label htmlFor="contained-button-file"></label>
                  </CSSTextField>
                <Error style={{ color: "red" }} touched={touched.min_nights} message={errors.min_nights} />

                <CSSTextField
                    style = {{width: 310, marginTop: 30}}
                    name="availibility_days"
                    id="availibility_days"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.availibility_days}
                    // color={this.state.buttoncolor}
                    placeholder='yearly availability in days'
                  >
                    ), }} ><label htmlFor="contained-button-file"></label>
                  </CSSTextField>
                <Error touched={touched.availibility_days} message={errors.availibility_days} />


                <CSSTextField
                    style = {{width: 310, marginTop: 30}}
                    name="price"
                    id="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    color={this.state.buttoncolor}
                    placeholder='price per night'
                  >
                    ), }} ><label htmlFor="contained-button-file"></label>
                  </CSSTextField>
                <Error touched={touched.price} message={errors.price} />

                    <MultipleSelect 
                            onChange={handleChange}
                            id="neighbourhood_group"
                            name='neighbourhood_group'
                            value={values.neighbourhood_group}
                            placeholder="neighbourhood"
                    />
                <Error touched={touched.neighbourhood_group} message={errors.neighbourhood_group} />


                <MultipleSelect 
                            onChange={handleChange}
                            id="room_type"
                            name='room_type'
                            value={values.room_type}
                            placeholder="room type"
                    />

                <Error touched={touched.room_type} message={errors.room_type} />
                <div className='button-wrapper'>
                       <div className="send-button">
                <Button type="submit" variant="contained" color={this.state.buttoncolor} position="end" disabled={isSubmitting}>
                            Send
                        </Button>
                        </div>
                        <div className="clear-button">
                <Button type="button" variant="contained" color="secondary" position="start" onClick={()=>{
                  resetForm()
                  this.setState({adress:""})}}>
                            Clear
                </Button>
                </div>
                </div>
            
            </form>
                  )}
                    
                  </Formik>
                  {this.state.errorMessage && <Typography>Message was't sent. Try again.</Typography>}
            </div>
          </Paper>
                  {/* </Grid>
                  
                  <Grid item xs={6} sm={8} > */}

                    {this.state.result===1 && <Success data={this.state.resultData}></Success>}
                    {this.state.result===0 && <Fail data={this.state.resultData}></Fail>}
                    {this.state.result===2 && <Default />}
{/* 
          </Grid>
          </Grid> */}

          </div>    
          );
    }

  
}

export default withStyles(styles)(InputForm1)

