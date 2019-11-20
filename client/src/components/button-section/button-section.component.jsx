import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import IconButton from '../../components/icon-button/icon-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';

import './button-section.styles.scss';

const ButtonSection = ({ currentUser, toggleModalAccount }) => {

    const openRecordings = () => {
        window.MobileActions.OpenRecordings();
    }

    return (

        <div className="buttons-wrapper">
            <IconButton type='button' to='/settings' imagetype='settings'>Settings</IconButton>
            <IconButton type='button' to='/' imagetype='recordings' onClick={openRecordings} >Recordings</IconButton>
            {currentUser ?
                <IconButton type='button' to='/premium' imagetype='premium'>  Premium </IconButton> :
                <IconButton type='button' to='/' onClick={toggleModalAccount} imagetype='premium'> Premium </IconButton>
            }
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleModalAccount: () => dispatch(toggleModalAccount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSection);