import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import FullPostComponent from '../../components/FullPost/FullPost';


class FullPost extends Component {
    state = {
        post: {},
        user: {}
    }

    componentDidMount () {
        console.log( "here" );
        const { match: { params } } = this.props;
        console.log(params.id)
        axios.get( '/api/v1/users/posts/' + params.id)
            .then( response => {
                const post = response.data
                this.setState({post: post});
                const user = response.data.user
                this.setState({user: user});
               console.log( response );
            } );
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
        console.log(this.state.post)
        const fullpost = <FullPostComponent 
            post = {this.state.post}
            user = {this.state.user}
        />;
        return (
            <div>
                <h1> Post</h1>
                <section className="carBrands">
                    {fullpost}
                </section>
            </div>
        );
    }
}

export default FullPost ;