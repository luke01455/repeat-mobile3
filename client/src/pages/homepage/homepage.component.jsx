import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TopSection from '../../components/top-section/top-section.component';
import TopSectionUsers from '../../components/top-section-users/top-section-users.component';
import MidSection from '../../components/mid-section/mid-section.component';
import BotSection from '../../components/bot-section/bot-section.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';

import './homepage.styles.scss';

const HomePage = ({ currentUser, toggleModalAccount }) => (

    <div className="homepage-container">

        {
            currentUser ?
                <TopSectionUsers /> :
                <TopSection />

        }
        <MidSection />
        <BotSection />
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleModalAccount: () => dispatch(toggleModalAccount())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);