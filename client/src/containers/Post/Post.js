import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import PostComponent from '../../components/Post/Post';
import post from '../../components/Post/Post';
import history from '../../history'

class Post extends Component {
    state = {
        posts: [],
        selectedPostId: null
   
    }

    componentDidMount () {
        axios.get( '/api/v1/users/posts' )
            .then( response => {
              const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({posts: updatedPosts});
               console.log( response );
            } );
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
        history.push("/posts/" + id)
    }
    render () {
       const posts = this.state.posts.map(post => {
        return <PostComponent 
            key={post.id}
            post = {post} 
            clicked={() => this.postSelectedHandler(post.id)} />;
     });
        return (
            <div>
                <h1> Posts</h1>
                <section className="carBrands">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Post;