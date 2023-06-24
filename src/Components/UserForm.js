import React, { Component } from 'react'

import { UserDetails } from './UserDetails'
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    state = {
        step: 1,
        firstname: "",
        lastname: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    // Proceed to Next-Step

    NextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Proceed to Prev Step

    PrevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle Field Change
    handlechange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {

        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio } = this.state;

        const value = { firstname, lastname, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        NextStep={this.NextStep}
                        handlechange={this.handlechange}
                        value={value}
                    //PrevStep = {this.PrevStep}
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        NextStep={this.NextStep}
                        PrevStep={this.PrevStep}

                        handlechange={this.handlechange}
                        value={value}
                    />
                )
            case 3:
                return (
                    <Confirm
                        NextStep={this.NextStep}
                        PrevStep={this.PrevStep}

                        
                        value={value}

                    />
                )
            case 4:
                return <Success/>

            default:
                break;
        }
    }
}

export default UserForm