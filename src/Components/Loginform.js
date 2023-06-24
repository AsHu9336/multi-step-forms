import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'


export default function Loginform() {
  return (
    <Login 
    Login = {this.Login}/>
   
  )
}


const Login = () =>{
    return <Grid container alignContent={'center'} justifyContent={'center'}>
        <TextField label="Enter UserName" variant='contained'/>
        <TextField label="Enter UserName" variant='contained'/>
        <Button label="Login" variant='contained'></Button>

    </Grid>
}