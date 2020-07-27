import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import history from '../../history'

class CarBrands extends Component {

    state = {
        carBrands: [],
       
    }
    componentDidMount () {
          axios.get( '/api/v1/admins/car_brands' )
            .then( response => {
              const carBrands = response.data;
                const updatedCarBrands = carBrands.map(carBrand => {
                    return {
                        ...carBrand
                    }
                });
                this.setState({carBrands: updatedCarBrands});
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
        <div>
        <Button variant="contained" color="primary" style={{"float": "left"}}>
             ADD NEW CAR BRAND
         </Button>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {this.state.carBrands.map((carBrand) => (
                <TableRow key={carBrand.id}>               
                <TableCell align="right">{carBrand.id}</TableCell>
                <TableCell align="right">{carBrand.name}</TableCell>
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
        </div>
    )
   }
}

export default CarBrands;
