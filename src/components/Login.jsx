import React, { Component } from 'react'
import { login } from './UserFunctions'
import Button from "@material-ui/core/Button";
import '../App.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
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

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (!res.error) {
                this.props.history.push(`/`)
            }
        })
    }

    render () {
        return (
            <div className="paper">

                        <form noValidate onSubmit={this.onSubmit}>
                            Log in
                            <div>
                        
                                <input type="email"
                                    className="authInput"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div>
                             
                                <input type="password"
                                    className="authInput"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>

                            {/* <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button> */}
                            <Button variant="contained" color="primary" type="submit">Log in</Button>
                        </form>
            </div>

        )
    }
}

export default Login