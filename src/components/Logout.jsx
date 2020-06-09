import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Logout extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/login`)
    }

    render () {
        return (

            <button onClick={this.logOut.bind(this)} className="logout">
            Logout
        </button>
        )
    }
}

export default withRouter(Logout)