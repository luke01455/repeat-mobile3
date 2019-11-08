import React from 'react';


import './settings-selection-option.styles.scss';

const SettingsSelectionOption = ({ children, ...props }) => {

return (
    <Link className="settings-option-container" to={`/${props.linkLocation}`}>
        <span className="settings-option">
            <span>
                {children}
            </span>
            
            { !props.noArrow ?
            <img src={rightarrowicon} className='right-arrow' alt='icon'/> :
            <span> </span>
            }
        </span>
    </Link>
)
}

export default SettingsSelectionOption;