import React from 'react';

import './settings.styles.scss';

const SettingsPage = () => (
<div className="settings-container"> 
    <div className='settings-title'> Settings </div>
    <ul className='ListContainer'>
    <li> On / Off </li>
        <li> HD / LQ / Power Saver  </li>
        <li> Cloud Storage </li>
        <li> Select Location</li>     
    </ul>
</div>
)

export default SettingsPage;