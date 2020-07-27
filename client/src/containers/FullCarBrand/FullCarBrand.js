import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import CarBrand from '../../components/CarBrand/CarBrand';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import SignIn from '../../components/SignIn/SignIn';
import history from '../../history'
import PostComponent from '../../components/Post/Post';
import Button from '@material-ui/core/Button';
 
class FullCarBrand extends Component {
    state = {
        // posts: [],
        carBrand: {},
        posts: [],
        selectedCarBrand: null,
        selectedPostId: null
   
    }

    componentDidMount () {
 
        const { match: { params } } = this.props;
            axios.get( '/api/v1/users/car_brands/' + params.id  )
            .then( response => {
              const posts = response.data.posts;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    
                    }
                });
                this.setState({posts: updatedPosts});
                const carBrand = response.data
                this.setState({carBrand: carBrand});

            } );
    }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
        history.push("/posts/" + id)
    }

    render () {
        console.log(this.state.posts)
        const posts = this.state.posts.map(post => {
             
            return (
            <div>
            <PostComponent
                key={post.id}
                post = {post} 
                clicked={() => this.postSelectedHandler(post.id)} />;

            </div>)
        });
        
        return (
            
            <div>
                <h1>{this.state.carBrand.name} Used Cars</h1>
   
                
                <section className="carBrands">
                    {posts}
                </section>
       
            </div>
        );
    }
}

export default FullCarBrand;