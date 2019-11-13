import React from 'react';

import { Link } from 'react-router-dom';

import ToggleSwitch from '../toggle-switch/toggle-switch.component'

import './settings-selection-option.styles.scss';

const SettingsSelectionOption = ({ children, ...props }) => {

return (
    <div className="settings-option-container" to={`/${props.linkLocation}`}>
        <span className="settings-option">
            <span>
                {children}
            </span>
            
            <ToggleSwitch />
        </span>
    </div>
)
}

export default SettingsSelectionOption;