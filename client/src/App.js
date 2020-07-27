import React, { Component } from 'react';
import {Switch,Router,Route} from "react-router-dom";

import Blog from './containers/Blog/Blog';
import Post from './containers/Post/Post';
import FullCarBrand from './containers/FullCarBrand/FullCarBrand';
import FullPost from './containers/FullPost/FullPost';
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import history from './history';
import Header from './components/Header/Header'
import User from './containers/User/Show'
import AdminLogin from './containers/Admin/Login'
import AdminHome from './containers/Admin/CarBrands'
import AdminPosts from './containers/Admin/Posts'
import AdminUsers from './containers/Admin/Users'

import Payment from './containers/Payment'

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div className="App">

          <Route component = {Header} />
          <Switch>
            <Route exact path= "/" component = {Blog}  />
            <Route path= "/signin" component = {Login} />
            <Route path= "/register" component = {Register} />
            <Route path= "/carbrands/:id" component = {FullCarBrand}  />
            <Route path= "/posts/:id" component = {FullPost}  />
            <Route path= "/posts" component = {Post}  />
            <Route path= "/payment" component = {Payment}  />
            <Route path= "/profile/:id" component = {User}  />
            <Route path= "/admin/signin" component = {AdminLogin}  />
            <Route path= "/admin/posts" component = {AdminPosts}  />
            <Route path= "/admin/users" component = {AdminUsers}  />
            <Route path= "/admin" component = {AdminHome}  />
            

            
          </Switch>
       </div>
    </Router>
      
    );
  }
}

export default App;
