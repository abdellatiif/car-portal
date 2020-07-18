import React from 'react';

import './CarBrand.css';
const postListStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  }
  
  const CarBrandCardStyles = {
    maxWidth: "30%",
    minWidth: "150px",
    flex: "1",
    margin: "5px",
  }

const CarBrand = (props) => (
    <article className="CarBrand" onClick={props.clicked}>
        <img src = {props.car_brand.picture_url}></img>
        <h1>{props.CarBrand.name}</h1>
        <div className="Info">
             
        </div>
    </article>
);

export default CarBrand;
//<div className="Author">{props.author}</div> 