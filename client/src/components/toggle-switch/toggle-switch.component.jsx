import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHqLqState } from '../../redux/switches/switches.selectors';
import { selectOnOffState } from '../../redux/switches/switches.selectors';

import Toggle from 'react-toggle'

import './toggle-switch.styles.css';

const ToggleSwitch = ({ btnName }) => {

  const toggleOnOff = () => {

  }

  return (
    <div>
      <label>
        <Toggle
          defaultChecked={true}
          onChange={() => console.log('test')} />
      </label>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  toggleRecordingOnOff: selectOnOffState,
  toggleBetweenHqLq: selectHqLqState
});

const mapDispatchToProps = dispatch => ({
  //signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitch);
