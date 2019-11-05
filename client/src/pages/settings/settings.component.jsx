import React from 'react';

import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';

import './settings.styles.scss';

const SettingsPage = () => (
    <div className="settings-container">
        <div className='settings-title'> Settings </div>
        <div className='list-container'>
            <span className='list-item'>
                 On / Off 
                 <ToggleSwitch />
                 </span>
            <span className='list-item'>
                 HD / LQ / Power Saver 
                 {/* <ToggleSwitch /> */}
                  </span>
            <span className='list-item'> 
            Cloud Storage 
            {/* <ToggleSwitch /> */}
            </span>
            <span className='list-item'>
                 Select Location
                 {/* <ToggleSwitch /> */}
                 </span>
        </div>
    </div>
)

export default SettingsPage;