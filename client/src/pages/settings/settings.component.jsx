import React from 'react';

import SettingsOption from '../../components/settings-option/settings-option.component';
import SettingsHeading from '../../components/settings-heading/settings-heading.component';


import './settings.styles.scss';

const SettingsPage = () => (
    <div className="settings-container">
        <div className='settings-title'> Settings </div>
        <div className='list-container'>

            <SettingsHeading> User Options </SettingsHeading>
            <SettingsOption type='button' linkLocation='premium'> My Account </SettingsOption>
            <SettingsOption type='button' linkLocation='settings/recordingsettings'> Recording Settings </SettingsOption>
            <SettingsOption> App Notification Settings </SettingsOption>
            <SettingsOption> Change Password </SettingsOption>

            <SettingsHeading> Feedback </SettingsHeading>
            <SettingsOption> Send us your feedback</SettingsOption>
            <SettingsOption> Rate the app </SettingsOption>
            <SettingsOption> Share the app </SettingsOption>

            <SettingsHeading> Terms & conditions </SettingsHeading>
            <SettingsOption> Privacy Policy </SettingsOption>
            <SettingsOption noArrow='true'> Sign Out </SettingsOption>
            <SettingsOption noArrow='true'> Version: 1.0.0.2 </SettingsOption>
        </div>
    </div>
)

export default SettingsPage;