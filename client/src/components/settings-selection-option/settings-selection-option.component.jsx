import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ToggleSwitch from '../toggle-switch/toggle-switch.component'
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './settings-selection-option.styles.scss';

const SettingsSelectionOption = ({ children, currentUser, userType, ...props }) => {

    let premiumStatus = 0;
    if(currentUser) {
        premiumStatus = currentUser.premiumStatus;
     }

    const switchType = userType;
    
return (
    <div className="settings-option-container" to={`/${props.linkLocation}`}>
        <span className="settings-option">
            <span>
                {children}
            </span>
            { switchType === 'free' ? 
            <ToggleSwitch /> : 
            premiumStatus ?
            <ToggleSwitch /> :
             <span></span>
             }
        </span>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(SettingsSelectionOption);

