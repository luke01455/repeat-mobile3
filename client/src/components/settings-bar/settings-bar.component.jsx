import React from 'react';

import './settings-bar.styles.scss';

const SettingsBar = ({children}) => (
    <div className='bar-container'>
        <div className='bar-text'>
        {children}
        </div> 
    </div>
)

export default SettingsBar;