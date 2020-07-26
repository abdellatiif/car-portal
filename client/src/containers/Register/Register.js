import React, { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import "./Register.css";
import history from '../../history'

import { Select, InputLabel, MenuItem } from '@material-ui/core';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("");
  let login_fail = null

  function validateForm() {
    return email.length > 0 && password.length > 0 && fullName.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/v1/users/signup', {
        user:
        {
            email: email,
            password: password,
            full_name: fullName,
            type: type

        }
        
      })
      .then(function (response) {
        console.log(response.data)
        const authentication_token = response.data.authentication_token;
        localStorage.setItem('authentication_token', authentication_token);
        history.push("/")
      })
      .catch(function (error) {
        alert("Please check your data entries")
      });

  }

  return (
    <div className="Register">
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
        <FormGroup controlId="password" bsSize="large">
          <p>Full Name</p>
          <FormControl
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            type="fullName"
          />
        </FormGroup>

        <p>Image</p>
        <input id="my_file_input" name="some_name" value = {picture}
          onChange={e => setPicture(e.target.value)} type="file"/>

        <InputLabel id="label" value = {type} onChange={e => setType(e.target.value)} >Type</InputLabel>
            <Select labelId="label" id="select" value="normal user">
            <MenuItem value="normal user">Normal User</MenuItem>
            <MenuItem value="broker">Broker</MenuItem>
            </Select>
        <br />
        <br />
        <Button variant="outlined" disabled={!validateForm() } type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
