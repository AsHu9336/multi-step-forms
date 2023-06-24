import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';




export class Confirm extends Component {
    render() {
        
        return (
            <MuiThemeProvider  container alignItems="center" justify="center">
                <React.Fragment>
                    <AppBar title='Success' />
                    <p>Thank You for The Submission of Form</p>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}



export default Confirm