import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import Calculator from "./components/Calculator"
import Landing from "./components/landing"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
      <Router>
      
      <div className="App">
      <Navbar />
      <header className="App-header">
      <Switch>
        <Route path="/login" component={Login}  />
        <Route path="/register" component={Register} />
        <Route path="/calculator" component={Calculator}/>
        <Route path="/landing" component={Landing}/>
      </Switch>
      </header>
      </div>
      
      </Router>
      </div>
    )
  }
}

export default App



