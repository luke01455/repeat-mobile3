import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHqLqState, selectOnOffState } from '../../redux/switches/switches.selectors';
import { toggleRecordingOnOff, toggleHqOnOff } from '../../redux/switches/switches.actions';

import Toggle from 'react-toggle'

import './toggle-switch.styles.css';

const ToggleSwitch = ({isRecordingOnOff, isHqLq, toggleRecordingOnOff, toggleHqOnOff, ...props }) => {


  const toggleOnOff = () => {
    if( props.btnName === 'onOffBtn') {
      toggleRecordingOnOff();
      if(window.MobileActions) {
        window.MobileActions.ToggleRecording();
      }
      
    }
    if ( props.btnName === 'premiumBtn') {
      toggleHqOnOff();
      if(window.MobileActions) {
        window.MobileActions.ToggleHqRecording();
      }
    }
  }


  return (
    <div>
      <label>
        <Toggle
          defaultChecked={ props.testingOnOff }
          onChange={toggleOnOff} />
      </label>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isRecordingOnOff: selectOnOffState,
  isHqLq: selectHqLqState
});

const mapDispatchToProps = dispatch => ({
  toggleRecordingOnOff: () => dispatch(toggleRecordingOnOff()),
  toggleHqOnOff: () => dispatch(toggleHqOnOff())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitch);

