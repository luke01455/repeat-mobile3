import React from 'react';

import SettingsOption from '../../components/settings-option/settings-option.component';
import SettingsHeading from '../../components/settings-heading/settings-heading.component';


import './settings.styles.scss';

const SettingsPage = () => (
    <div className="settings-container">
        <div className='settings-title'> Settings </div>
        <div className='list-container'>
            <SettingsHeading> User Options </SettingsHeading>
            <SettingsOption type='button' linkLocation='premium'> Recordings Options </SettingsOption>
            <SettingsOption> App Notification Settings </SettingsOption>
            <SettingsOption> Change Password </SettingsOption>
        </div>
    </div>
)

export default SettingsPage;