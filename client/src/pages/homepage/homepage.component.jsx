import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom'

import DiscImage from '../../components/disc-image/disc-image.component';
import RangeBar from '../../components/range-bar/range-bar.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleModalPremium } from '../../redux/account-modal/account-modal.actions';

import './homepage.styles.scss';

const HomePage = ({ currentUser, toggleModalPremium }) => (
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
        <div onClick={toggleModalPremium} className="Link-container"> PREMIUM </div>
        }
        
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleModalPremium: () => dispatch(toggleModalPremium())
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);