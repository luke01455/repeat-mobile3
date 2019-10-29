import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RangeBar from '../../components/range-bar/range-bar.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import IconButton from '../../components/icon-button/icon-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';

import './homepage.styles.scss';

const HomePage = ({ currentUser, toggleModalAccount }) => (
    <div className="homepage-container">
        <div className="save-past-text"> Save the past...</div>
        <div className="minutes-text"> 10 minutes </div>
        <RangeBar />
        <CustomButton className="save-button"> Save </CustomButton>
        <div className="buttons-wrapper">
        <IconButton to="/settings" imagetype='settings'>Settings</IconButton>
        <IconButton type='button' imagetype='recordings'>Recordings</IconButton>
        { currentUser ?
        <IconButton type='button' to='/premium'> PREMIUM </IconButton> :
        <IconButton type='button' onClick={toggleModalAccount} imagetype='premium'> Premium </IconButton>
        }
        
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleModalAccount: () => dispatch(toggleModalAccount())
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);