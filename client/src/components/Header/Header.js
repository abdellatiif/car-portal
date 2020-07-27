import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
  AdminLogoutHandler = () => {
    localStorage.removeItem("admin_authentication_token");
    history.push("/")
  }
  HomeHandler = () => {
    history.push("/")
  }
  AdminUsersHandler = () => {
    history.push("/admin/users")
  }
  AdminPostsHandler = () => {
    history.push("/admin/posts")
  }
  AdminCarBrandsHandler = () => {
    history.push("/admin")
  }
  ProfileHandler = () => {
    let user_id  = localStorage.getItem("user_id")
    history.push("/profile/" + user_id )
  }
  render() {
    let loggedIn = localStorage.getItem("authentication_token")
    let AdminLogIn = localStorage.getItem("admin_authentication_token")
    console.log(loggedIn)
    return (
      <div >
        {AdminLogIn ? null:  <Button 
          color="primary"
          size="large" 
          style={{"float": "left"}}
          onClick={() => {this.HomeHandler()}}
          >Car Portal</Button>}

        {AdminLogIn ? <Button  style={{"float": "center"}}
           onClick={() => {this.AdminUsersHandler()}}>Users</Button> : null
        } 
        {AdminLogIn ? <Button   style={{"float": "center"}}
           onClick={() => {this.AdminPostsHandler()}}>Posts</Button> : null
        }  
        {AdminLogIn ? <Button   style={{"float": "center"}}
           onClick={() => {this.AdminCarBrandsHandler()}}>Car brands</Button> : null
        }  
        <TextField id="filled-basic" style={{"float": "center"}} label="search" variant="filled" />

        {loggedIn || AdminLogIn ?  null:  <Button 
          variant="outlined" color="primary"
          style={{"float": "right"}}
          onClick={() => {this.RegisterHandler()}}
          >Register</Button>}
        
        {loggedIn ? <Button variant="outlined" style={{"float": "right"}}
           onClick={() => {this.ProfileHandler()}}>Profile</Button> : null
        }

        {loggedIn || AdminLogIn ? null:
          <Button variant="outlined" color="secondary" style={{"float": "right"}}
           onClick={() => {this.SignInHandler()}}>Sign In</Button>  
        }
        {loggedIn ? <Button variant="outlined" color="primary" style={{"float": "right"}}
           onClick={() => {this.LogoutHandler()}}>Log out</Button> : null
        }
        {AdminLogIn ? <Button variant="outlined" color="primary" style={{"float": "right"}}
           onClick={() => {this.AdminLogoutHandler()}}>Log out</Button> : null
        }
        
        <br />
        <br />
      </div>

    );
  }
}

export default Header;
