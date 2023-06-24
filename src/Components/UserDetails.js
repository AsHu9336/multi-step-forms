
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';




export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.NextStep();
    }
    render() {
        const { value, handlechange } = this.props;
        return (

            <MuiThemeProvider >
                <React.Fragment>
                    <AppBar title='Enter user Details' />
                    <div className='container'>
                        <TextField
                            hintText="Enter Your FirstName"
                            floatingLabelFixed="Enter FirstName"
                            onChange={handlechange('firstname')}
                            defaultValue={value.firstname}
                        />
                        <br />
                        <TextField
                            hintText="Enter Your LastName"
                            floatingLabelFixed="Enter LastName"
                            onChange={handlechange('lastname')}
                            defaultValue={value.lastname}
                        />
                        <br />
                        <TextField
                            hintText="Enter Your Email"
                            floatingLabelFixed="Enter Email"
                            onChange={handlechange('email')}
                            defaultValue={value.email}

                        />

                        <br />
                        <Button variant='contained' onClick={this.continue} style={styles.button}>
                            Continue
                        </Button>
                    </div>

                </React.Fragment>
            </MuiThemeProvider>


        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    top: {

    }
}

export default UserDetails