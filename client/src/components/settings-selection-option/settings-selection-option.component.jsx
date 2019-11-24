import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ToggleSwitch from '../toggle-switch/toggle-switch.component'

import { selectHqLqState, selectOnOffState } from '../../redux/switches/switches.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './settings-selection-option.styles.scss';

const SettingsSelectionOption = ({ children, currentUser, userType, isHqLq, isRecordingOnOff, ...props }) => {

    let premiumStatus = 0;
    if(currentUser) {
        premiumStatus = currentUser.premiumStatus;
     }

    const switchType = userType;

    const onOffFromBackend = () => {
        if(window.MobileActions) {
            return window.MobileActions.IsRecording();
          }
        else {
            if (isRecordingOnOff) {
                return true;
            } else {
                return false;
            }
             
        }
    }

    
    
return (
    <div className="settings-option-container" to={`/${props.linkLocation}`}>
        <span className="settings-option">
            <span>
                {children}
            </span>
            { switchType === 'free' ? 
            <ToggleSwitch btnName = 'onOffBtn'  testingOnOff={onOffFromBackend()}/> : 
            premiumStatus ?
            <ToggleSwitch btnName = 'premiumBtn' testingOnOff={isHqLq ? true : false}/> :
             <span></span>
             }
        </span>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isRecordingOnOff: selectOnOffState,
    isHqLq: selectHqLqState
});



export default connect(mapStateToProps)(SettingsSelectionOption);

