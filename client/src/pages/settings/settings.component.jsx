import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleModalAccount } from '../../redux/account-modal/account-modal.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import SettingsOption from '../../components/settings-option/settings-option.component';
import SettingsHeading from '../../components/settings-heading/settings-heading.component';
import SettingsBar from '../../components/settings-bar/settings-bar.component';


import './settings.styles.scss';

const SettingsPage = ({ toggleModalAccount, currentUser }) => (
    <div className="settings-container">
        <SettingsBar> Settings </SettingsBar>
        <div className='list-container'>

            <SettingsHeading> User Options </SettingsHeading>
            {
              currentUser ? 
              <SettingsOption type='button' linkLocation='account'> My Account </SettingsOption>  :
              <div onClick={toggleModalAccount}>
                   <SettingsOption type='button'  linkLocation='settings' > My Account </SettingsOption>
              </div>
              
            }
            <SettingsOption type='button' linkLocation='settings/recordingsettings'> Recording Settings </SettingsOption>
            <SettingsOption type='button' linkLocation='settings'> App Notification Settings </SettingsOption>
            <SettingsOption type='button' linkLocation='settings'> Change Password </SettingsOption>

            <SettingsHeading> Feedback </SettingsHeading>
            <SettingsOption type='button' linkLocation='settings'> Send us your feedback</SettingsOption>
            <SettingsOption type='button' linkLocation='settings'> Rate the app </SettingsOption>
            <SettingsOption type='button' linkLocation='settings'> Share the app </SettingsOption>

            <SettingsHeading> Terms & conditions </SettingsHeading>
            <SettingsOption type='button' linkLocation='settings'> Privacy Policy </SettingsOption>
            <SettingsOption noArrow='true'> Sign Out </SettingsOption>
            <SettingsOption noArrow='true'> Version: 1.0.0.2 </SettingsOption>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

  const mapDispatchToProps = dispatch => ({
    toggleModalAccount: () => dispatch(toggleModalAccount()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);