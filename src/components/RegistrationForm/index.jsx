import React from 'react';
import { CustomInput } from '../CustomInput';

export class RegistrationForm extends React.Component {
    state = {};

    changeInput = (event) => {
        const { placeholder, value } = event.target;
        this.setState({
            [placeholder]: value
        });
    }

    clickRegistration = () => {
        console.log(this.state)
    }
    render() {

        return (
            <form>
                <CustomInput type='text' placeholder='First Name' writedInfo={this.changeInput} />
                <br />
                <CustomInput type='text' placeholder='Last Name' writedInfo={this.changeInput} />
                <br />
                <CustomInput type='email' placeholder='email' writedInfo={this.changeInput} />
                <br />
                <CustomInput type='password' placeholder='password' writedInfo={this.changeInput} />
                <CustomInput type='button' value="Registration" onClick={this.clickRegistration} />
            </form>
        )
    }
}