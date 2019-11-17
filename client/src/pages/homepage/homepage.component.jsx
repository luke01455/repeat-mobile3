import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RangeBar from '../../components/range-bar/range-bar.component';
import Title from '../../components/title/title.component';
import SaveButton from '../../components/save-button/save-button.component';
import IconButton from '../../components/icon-button/icon-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';

import './homepage.styles.scss';

const HomePage = ({ currentUser, toggleModalAccount }) => {
    
    const saveRecording = () => {
        window.MobileActions.Save();
      }
    
    const openRecordings = () => {
        window.MobileActions.OpenRecordings();
    }
      
    return (
    <div className="homepage-container">
        <Title />
        <div className="center-container">
        <div className="save-past-text"> Save the past...</div>
        <div className="minutes-text"> 10 minutes </div>
        <RangeBar />
        </div>
        <SaveButton type='button' className="save-button" onClick={saveRecording} ></SaveButton>
        <div className="buttons-wrapper">
        <IconButton type='button' to='/settings' imagetype='settings'>Settings</IconButton>
        <IconButton type='button' to='/' imagetype='recordings' onClick={openRecordings} >Recordings</IconButton>
        { currentUser ?
        <IconButton type='button' to='/premium' imagetype='premium'>  Premium </IconButton> :
        <IconButton type='button' to='/' onClick={toggleModalAccount} imagetype='premium'> Premium </IconButton>
        }
        </div>
    </div>
    )
    }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleModalAccount: () => dispatch(toggleModalAccount())
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);