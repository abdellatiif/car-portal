import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import "./Login.css";
import history from '../../history'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let login_fail = null

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/v1/users/login', {
        sign_in:
        {
            email: email,
            password: password
        }
        
      })
      .then(function (response) {
        const authentication_token = response.data.data.user.authentication_token;
        localStorage.setItem('authentication_token', authentication_token);
        history.push("/")
      })
      .catch(function (error) {
        alert("Invalid Email or password")
      });

  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <p>Email</p>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <p>Password</p>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button variant="outlined" disabled={!validateForm() } type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
