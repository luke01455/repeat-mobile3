import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';


import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import MenuButton from '../../components/menu-button/menu-button-component';

import './header.styles.scss';



const Header = ({ currentUser, signOutStart }) => (
    <div className='HeaderContainer'>
        <Link className='LogoContainer' to="/">
            <MenuButton />
        </Link>
        <div className='OptionContainer'>
        {
                currentUser ? (
                <Link className='OptionLink' to='/signin'>
                    SIGN IN
                </Link>
                ) : (
                <div className='OptionLink' as='div' onClick={signOutStart}>
                    SIGN OUT
                </div>
                )}
            {
                currentUser ? (
                <div className='OptionLink' as='div' onClick={signOutStart}>
                    SIGN OUT
                </div>
                ) : (
                <Link className='OptionLink' to='/signin'>
                    SIGN IN
                </Link>
                )}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);