import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';



export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.NextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.PrevStep();
    }
    render() {
        const { value, handlechange } = this.props;
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <AppBar title='Enter Personal Details' />
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelFixed="Enter Occupation"
                        onChange={handlechange('occupation')}
                        defaultValue={value.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="City Name"
                        floatingLabelFixed="City Name"
                        onChange={handlechange('city')}
                        defaultValue={value.city}
                    />
                    <br/>
                    <TextField
                        hintText="Bio"
                        floatingLabelFixed="Bio"
                        onChange={handlechange('bio')}
                        defaultValue={value.bio}
                        
                    />

                    <br/>
                    <Button variant='contained' onClick={this.back} style={styles.button}>
                        Prev
                    </Button>
                    <Button variant='contained' onClick={this.continue} style={styles.button}>
                        Continue
                    </Button>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15 
    },
    top:{
        
    }
}

export default PersonalDetails