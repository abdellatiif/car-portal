import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import history from '../../history'

class Posts extends Component {

    state = {
        posts: [],
       
    }
    componentDidMount () {
          axios.get( '/api/v1/admins/posts' )
            .then( response => {
              const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({posts: updatedPosts});
               console.log( response );
            } );
    }
  render () {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      let AdminLogIn = localStorage.getItem("admin_authentication_token")
      if (!AdminLogIn){
          history.push("/admin/signin")
      }
    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Production Year</TableCell>
                <TableCell align="right">Mileage</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {this.state.posts.map((post) => (
                <TableRow key={post.id}>               
                <TableCell align="right">{post.id}</TableCell>
                <TableCell align="right">{post.description}</TableCell>
                <TableCell align="right">{post.productionyear}</TableCell>
                <TableCell align="right">{post.millage}</TableCell>
                <TableCell align="right">{post.color}</TableCell>
                
                <TableCell align="right">
                    <IconButton aria-label="delete" >
                         <DeleteIcon  />
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
   }
}

export default Posts;
