import React from 'react';

import './Post.css';
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

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <img src = {props.post.picture_url}></img>
        <h1>{props.post.description}</h1>
        <div className="Info">
             
        </div>
    </article>
);

export default post;
//<div className="Author">{props.author}</div> 