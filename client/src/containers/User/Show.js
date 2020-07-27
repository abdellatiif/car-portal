import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import PostComponent from '../../components/Post/Post';
import post from '../../components/Post/Post';
import history from '../../history'
import { emphasize } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class User extends Component {
    state = {
        user: {},
        posts: []
    }

    componentDidMount () {
        const { match: { params } } = this.props;
        axios.get( '/api/v1/users/users/' + params.id )
        .then( response => {
            const posts = response.data.posts;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    
                    }
            });
            this.setState({posts: updatedPosts});
            const user = response.data
            this.setState({user: user});
           console.log( response );
        } );
    }

    deletePostHandler = (id) => {
        console.log("delete post")
        console.log(id)
        axios.delete( '/api/v1/users/posts/' + id)
        .then( response => {
            console.log(response)})
        .catch(err => {
            console.log(err)
        });
        window.location.reload(false);
    }
    render () {
        console.log(this.state.posts)
        const posts = this.state.posts.map(post => {
            return (
            <div>
            <PostComponent
                key={post.id}
                post = {post} 
            />
            <Button variant="outlined" color="primary" style={{"float": "center"}}
            onClick={() => {this.deletePostHandler(post.id)}}>DELETE</Button>
            </div>);
        });

        return (
            <div>
                <section>
                    <h2>Hi {this.state.user.full_name} !!</h2>
                    <p>email: {this.state.user.email}</p>
                    <p>{this.state.user.type} </p>
                    {posts}
                </section>
            </div>
        );
    }
}

export default User;