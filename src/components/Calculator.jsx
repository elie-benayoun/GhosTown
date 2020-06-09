
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

const ValidationSchema = Yup.object().shape({
    first_name: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

    last_name: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

    existing_magic_skills: Yup.array()
    .required("Required"),

    desired_magic_skills: Yup.array()
    .required("Required"),

    interested_in_course: Yup.array()
    .required("Required"),

    min_nights: Yup.number()
    .positive()
    .integer()
    .min(1, "Invalid.")
    .max(31, "Invalid.")
    
  });
  

const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "26ch",
      color: "#000000"
    }
}
})


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
          adressData:{}
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
            <>
            <Formik
              initialValues={{ min_nights: "", price: "",adresslat:"",adresslong:"", neighbourhood_group: "", room_type: "",}}
                validationSchema={ValidationSchema}
              validate={values => {
                let errors = {};
                 if (min_nights.length == 0) {
                    errors.first_name = `Wrong Value`;
                  } else if (values.last_name.length >= 50) {
                        errors.last_name = `Max 50 characters`;
                  }else if (values.adresslat.length==0){
                    errors.adresslat = `need a value`;
                  } else if (values.adresslong.length==0){
                    errors.adresslong = `need a value`;
                  }
                return errors;
              }}
             onSubmit={async (values, { setSubmitting, resetForm }) => {
                this.setState({buttoncolor: 'inherit'})
                this.setState({errorMessage : false})
                this.setState({adress:""})
                // const datetime = this.getCurrentDate()
                resetForm();
                // addStudent(values)
                let a = values.toString()
                console.log(a)
                console.log(values)
                this.setState({buttoncolor: 'primary'})
                }}
              >
            
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
            <form className={`${styles.root}`} autoComplete="off" onSubmit={handleSubmit}>



                <>
                    <div className="inputadress">
                        <input className="inputfield"
                            value={this.state.adress}
                            onChange={(event)=>{this.searchAdress(event.target.value)}}
                            
                    />
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
                    </div>
                </>
                <Error touched={touched.adresslat} message={errors.adresslat} />


                <CSSTextField
                    name="min_nights"
                    id="min_nights"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.min_nights}
                    color={this.state.buttoncolor}
                    placeholder='minimum number of nights'
                  >
                    ), }} ><label htmlFor="contained-button-file"></label>
                  </CSSTextField>
                <Error touched={touched.first_name} message={errors.first_name} />

                <CSSTextField
                    name="price"
                    id="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    color={this.state.buttoncolor}
                    placeholder='price by night'
                  >
                    ), }} ><label htmlFor="contained-button-file"></label>
                  </CSSTextField>
                <Error touched={touched.last_name} message={errors.last_name} />

                    <MultipleSelect 
                            onChange={handleChange}
                            id="neighbourhood_group"
                            name='neighbourhood_group'
                            value={values.neighbourhood_group}
                            placeholder="neighbourhood group"
                    />
                <Error touched={touched.existing_magic_skills} message={errors.existing_magic_skills} />


                <MultipleSelect 
                            onChange={handleChange}
                            id="room_type"
                            name='room_type'
                            value={values.room_type}
                            placeholder="room type"
                    />

                <Error touched={touched.interested_in_course} message={errors.interested_in_course} />


                <Button type="submit" variant="contained" color={this.state.buttoncolor} position="end" disabled={isSubmitting}>
                            Send
                        </Button>
            </form>
                  )}
                    
                  </Formik>
                  {this.state.errorMessage && <Typography>Message was't sent. Try again.</Typography>}
            </>      
          );
    }

  
}

export default withStyles(styles)(InputForm1)

