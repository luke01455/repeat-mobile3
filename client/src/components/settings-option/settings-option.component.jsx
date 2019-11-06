import React from 'react';

import rightarrowicon from '../../images/rightarrow.png';

import './settings-option.styles.scss';

const SettingsOption = ({ children, linkLocation }) => {

return (
    <div className="settings-option-container" to={`/${linkLocation}`}>
        <span className="settings-option">
            <span>
                {children}
            </span>
            <img src={rightarrowicon} className='right-arrow' alt='icon'/>
        </span>
    </div>
)
}

export default SettingsOption;