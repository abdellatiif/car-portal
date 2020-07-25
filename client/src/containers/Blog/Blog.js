import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import CarBrand from '../../components/CarBrand/CarBrand';
import Button from '../../components/Button/Button';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import SignIn from '../../components/SignIn/SignIn';
import history from '../../history'

import './Blog.css';

class Blog extends Component {
    state = {
        // posts: [],
        carBrands: [],
        selectedCarBrand: null,
        selectedPostId: null
   
    }

    componentDidMount () {
        // axios.get( '/api/v1/posts' )
        //     .then( response => {
        //       const posts = response.data.slice(0, 4);
        //         const updatedPosts = posts.map(post => {
        //             return {
        //                 ...post
        //             }
        //         });
        //         this.setState({posts: updatedPosts});
             //   console.log( response );
            // } );
            axios.get( '/api/v1/users/car_brands' )
            .then( response => {
              const carBrands = response.data.slice(0, 4);
                const updatedCarBrands = carBrands.map(carBrand => {
                    return {
                        ...carBrand
                    }
                });
                this.setState({carBrands: updatedCarBrands});
             //   console.log( response );
            } );
    }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }
    CarBrandSelectedHandler = (id) => {
        this.setState({selectedCarBrandId: id});
        history.push("/carbrands/" + id)
    }

    render () {
        console.log("here   ")
        const carBrands = this.state.carBrands.map(car_brand => {
            return <CarBrand
                key={car_brand.id}
                car_brand = {car_brand} 
                clicked={() => this.CarBrandSelectedHandler(car_brand.id)} />;
        });
       // console.log(posts)
    //    const posts = this.state.posts.map(post => {
    //     return <Post 
    //         key={post.id}
    //         post = {post} 
    //         clicked={() => this.postSelectedHandler(post.id)} />;
    // });
        return (
            
            <div>
               
                <h1> CarBrand</h1>
                
                <section className="carBrands">
                    {carBrands}
                </section>
                {/* <section> */}
                    {/* <FullPost id={this.state.selectedPostId} /> */}
                {/* </section> */}
                {/* <section>
                    <SignIn />
                </section> */}
            </div>
        );
    }
}

export default Blog;