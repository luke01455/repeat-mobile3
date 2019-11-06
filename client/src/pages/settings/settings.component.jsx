import React from 'react';

import SettingsOption from '../../components/settings-option/settings-option.component';

import './settings.styles.scss';

const SettingsPage = () => (
    <div className="settings-container">
        <div className='settings-title'> Settings </div>
        <div className='list-container'>
            <SettingsOption />
            <SettingsOption />
        </div>
    </div>
)

export default SettingsPage;