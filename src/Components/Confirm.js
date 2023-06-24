import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import Button from '@mui/material/Button';
import { ListItem } from 'material-ui/List';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.NextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.PrevStep();
    }
    render() {
        const { value :{
            firstname, lastname, email, occupation, city, bio 
        }} = this.props;
        return (
            <MuiThemeProvider  container alignItems="center" justify="center">
                <React.Fragment>
                    <AppBar title='Confirm User Data' />
                    <List>
                        <ListItem 
                        primaryText = "First Name"
                        secondaryText = {firstname}
                        />
                        <ListItem 
                        primaryText = "Last Name"
                        secondaryText = {lastname}
                        />
                        <ListItem 
                        primaryText = "Email"
                        secondaryText = {email}
                        />
                        <ListItem 
                        primaryText = "Occupation"
                        secondaryText = {occupation}
                        />
                        <ListItem 
                        primaryText = "City"
                        secondaryText = {city}
                        />
                        <ListItem 
                        primaryText = "Bio"
                        secondaryText = {bio}
                        />
                    </List>
                    

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

export default Confirm