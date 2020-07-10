import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
    state = {
        productionyear: '',
        description: '',
        carBrand: 'Abood'
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Production year</label>
                <input type="text" value={this.state.productionyear} onChange={(event) => this.setState({productionyear: event.target.value})} />
                <label>Description</label>
                <textarea rows="4" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                <label>Car Brand</label>
                <select value={this.state.carBrand} onChange={(event) => this.setState({carBrand: event.target.value})}>
                    <option value="Abood">Verna</option>
                    <option value="Abood1">Mercedes</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default NewPost;