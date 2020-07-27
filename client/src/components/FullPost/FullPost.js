import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import history from '../../history'

import './FullPost.css';

const postListStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  }
  
  const postCardStyles = {
    maxWidth: "30%",
    minWidth: "150px",
    flex: "1",
    margin: "5px",
  }

  function paymentHandler() {
     history.push("/payment")
  } 
  
const FullPostComponent = (props) => (
    <div className="Info">
        <img src = {props.post.picture_url}></img>
        <p>Owner: {props.user.full_name}</p>
        <p>Description: {props.post.description}</p>  
        <p>Color: {props.post.color}</p>
        <p>Mileage: {props.post.millage}</p>
        <p>Production Year: {props.post.productionyear}</p>
        <p>Contact: {props.user.email}</p> 
        <Button  color="primary" style={{"float": "left"}} onClick={() => {paymentHandler()}}
                >BUY NOW</Button>
    </div>
);

export default FullPostComponent;