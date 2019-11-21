import React from 'react';

import MenuButton from '../../components/menu-button/menu-button-component';
import './settings-bar.styles.scss';

const SettingsBar = ({children}) => (
    <div className='menu-button-container'><MenuButton />
    <div className='bar-container'>
        
        
        <div className='bar-text'>
        {children}
        </div> 
    </div>
    </div>
)

export default SettingsBar;