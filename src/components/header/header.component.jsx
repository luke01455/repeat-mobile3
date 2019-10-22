import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import MenuButton from '../../components/menu-button/menu-button-component';

import { HeaderContainer, LogoContainer, OptionContainer, OptionLink} from './header.styles';



const Header = ({ currentUser, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <MenuButton />
        </LogoContainer>
        <OptionContainer>
        {
                currentUser ? (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
                ) : (
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
                )}
            {
                currentUser ? (
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
                ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
                )}
        </OptionContainer>
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);