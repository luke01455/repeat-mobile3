import React, { useState } from 'react';
import { connect }from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import TopSectionUsers from '../../components/top-section-users/top-section-users.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const  SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword} = userCredentials; 

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart ({ displayName, email, password })
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }


        return (
            <div className='overall-container'>
            <TopSectionUsers />
            <div className='SignUpContainer'>
                <div className='SignUpTitle'>SIGN UP</div>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                type='text' 
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                />
                <FormInput 
                type='email' 
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                />
                <FormInput 
                type='password' 
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput 
                type='password' 
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                />
                <div className='ButtonsBarContainer'>
                <CustomButton type='submit'> SIGN UP </CustomButton>
                </div>
                <div className="sign-up-text"> Already got an account? </div>
                <div className="sign-up-text2"> Sign In </div>
            </form>
            </div>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);