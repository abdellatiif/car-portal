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
class Users extends Component {

    state = {
        users: [],
       
    }
    componentDidMount () {
          axios.get( '/api/v1/admins/users' )
            .then( response => {
              const users = response.data;
                const updatedUsers = users.map(user => {
                    return {
                        ...user
                    }
                });
                this.setState({users: updatedUsers});
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
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Full Name</TableCell>
               
                <TableCell align="right">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {this.state.users.map((user) => (
                <TableRow key={user.id}>               
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.full_name}</TableCell>
               
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

export default Users;
