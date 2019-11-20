import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import TopSectionUsers from '../../components/top-section-users/top-section-users.component';

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
            <div>
            <TopSectionUsers />
            <div className='SignInContainer'>
                
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
                    { <div className='ButtonsBarContainer'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    { <CustomButton 
                    type='button' onClick={googleSignInStart}>
                       <div></div> Google Sign In
                    </CustomButton> }
                    </div> }
                </form>
              <div className="sign-up-text"> Sign up </div>
              <div className="forgot-password-text"> Forgot your password? </div>
            </div>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);