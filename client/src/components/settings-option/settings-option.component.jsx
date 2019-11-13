import React from 'react';

import { Link } from 'react-router-dom';

import rightarrowicon from '../../images/rightarrow.png';


import './settings-option.styles.scss';

const SettingsOption = ({ children, ...props }) => {

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

export default SettingsOption;