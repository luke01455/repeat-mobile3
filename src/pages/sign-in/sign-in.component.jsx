import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Title from '../../components/title/title.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const  SignIn = ({ emailSignInStart, googleSignInStart }) => {

   const [ userCredentials, setCredentials ] = useState({ email: '', password: ''})

   
   const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password); 
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value})
    };
        return (
            <div className='SignInContainer'>
                <Title />
                <div className='SignInTitle'>SIGN IN</div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        required
                        label="EMAIL"
                        handleChange={handleChange}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        required
                        label="PASSWORD"
                        handleChange={handleChange}
                    />
                    {/* <div className='ButtonsBarContainer'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton 
                    type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                    </div> */}
                </form>

            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);