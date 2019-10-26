import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom'

import DiscImage from '../../components/disc-image/disc-image.component';
import RangeBar from '../../components/range-bar/range-bar.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';

import './homepage.styles.scss';

const HomePage = ({ currentUser, toggleModalAccount }) => (
    <div className="homepage-container">
        <div className="save-past-text"> Save the past...</div>
        <div className="minutes-text"> 10 minutes </div>
        <RangeBar />
        <DiscImage />
        <CustomButton className="save-button"> Save </CustomButton>
        <div className="buttons-wrapper">
        <Link className="Link-container" to="/settings">SETTINGS</Link>
        <div>RECORDINGS</div>
        { currentUser ?
        <Link className="Link-container" to="/premium">PREMIUM</Link> :
        <div onClick={toggleModalAccount} className="Link-container"> PREMIUM </div>
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