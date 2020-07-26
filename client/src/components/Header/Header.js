import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import history from '../../history'

class Header extends Component {
  RegisterHandler = () => {
    history.push("/register")
  }
  SignInHandler = () => {
    history.push("/signin")
  }
  LogoutHandler = () => {
    localStorage.removeItem("authentication_token");
    history.push("/")
  }
  HomeHandler = () => {
    history.push("/")
  }
  render() {
    let loggedIn = localStorage.getItem("authentication_token")
    console.log(loggedIn)
    return (
      <div style={{backgroundColor: "#D3D3D3"}}>
        <Button 
          color="primary"
          size="large" 
          style={{"float": "left"}}
          onClick={() => {this.HomeHandler()}}
          >Car Portal</Button>

        {loggedIn ?  null:  <Button 
          variant="outlined" color="primary"
          style={{"float": "right"}}
          onClick={() => {this.RegisterHandler()}}
          >Register</Button>}

        {loggedIn ? null:
          <Button variant="outlined" color="secondary" style={{"float": "right"}}
           onClick={() => {this.SignInHandler()}}>Sign In</Button>  
        }
        {loggedIn ? <Button variant="outlined" color="primary" style={{"float": "right"}}
           onClick={() => {this.LogoutHandler()}}>Log out</Button> : null
        }
        <br />
        <br />
      </div>

    );
  }
}

export default Header;
