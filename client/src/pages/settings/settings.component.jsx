import React from 'react';

import SettingsOption from '../../components/settings-option/settings-option.component';
import SettingsHeading from '../../components/settings-heading/settings-heading.component';


import './settings.styles.scss';

const SettingsPage = () => (
    <div className="settings-container">
        <div className='settings-title'> Settings </div>
        <div className='list-container'>

            <SettingsHeading> User Options </SettingsHeading>
            <SettingsOption type='button' linkLocation='account'> My Account </SettingsOption>
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

export default SettingsPage;