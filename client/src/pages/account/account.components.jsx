import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import SettingsHeading from '../../components/settings-heading/settings-heading.component';
import SettingsOption from '../../components/settings-option/settings-option.component';
import TopSectionUsers from '../../components/top-section-users/top-section-users.component';


import './account.styles.scss';

const AccountPage = ({ currentUser }) => (
    <div>
        <TopSectionUsers isSmall='isSmall' />
    <div className="account-container">
        <div className='header-section-container'>
            <div className='account-title'> Account </div>
            <div className='name-email-container'>
                {currentUser ? (
                    <div className='display-name'>{currentUser.displayName}</div>) :
                    (<div></div>)}

                {currentUser ? (
                    <div className='display-email'>{currentUser.email}</div>) :
                    (<div></div>)}

            </div>
        </div>

        <SettingsHeading> Account Information </SettingsHeading>
        <SettingsOption isDead={true} linkLocation='account'> Account </SettingsOption>
        <SettingsOption isDead={true} linkLocation='account'> Personal Information </SettingsOption>
        <SettingsOption isDead={true} linkLocation='account'> Change Password</SettingsOption>

        <SettingsHeading> Premium Information </SettingsHeading>
        <SettingsOption linkLocation='premium'> Premium </SettingsOption>


    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AccountPage);