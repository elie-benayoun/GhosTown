import React, { Component } from 'react'
import { register } from './UserFunctions'
import Button from "@material-ui/core/Button";

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (

                        <form noValidate onSubmit={this.onSubmit}>
                            Sign up
                            <div className="form-group">
                                {/* <label htmlFor="first_name">First Name</label> */}
                                <input type="text"
                                    // className="form-control"
                                    className="authInput"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="last_name">Last Name</label> */}
                                <input type="text"
                                    // className="form-control"
                                    className="authInput"
                                    name="last_name"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="email">Email Address</label> */}
                                <input type="email"
                                    // className="form-control"
                                    className="authInput"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="password">Password </label> */}
                                <input type="password"
                                    // className="form-control"
                                    className="authInput"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
{/* 
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button> */}
                            <Button variant="contained" color="primary" type="submit">Sign up</Button>
                        </form>

        )
    }
}

export default Register


// <div>
// <h1>Sign up</h1>
// <form onSubmit={handleSignUp}>
//     <div><input className="authInput" name="name" type="name" placeholder="name" /></div>
//     <div><input className="authInput" name="email" type="email" placeholder="Email" /></div>
//     <div><input className="authInput" name="password" type="password" placeholder="Password" /></div>
//     <Button variant="contained" color="primary" type="submit">Sign up</Button>
// </form>
// </div>
