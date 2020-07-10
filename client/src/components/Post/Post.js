import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.any}</h1>
        <div className="Info">
             
        </div>
    </article>
);

export default post;
//<div className="Author">{props.author}</div> 