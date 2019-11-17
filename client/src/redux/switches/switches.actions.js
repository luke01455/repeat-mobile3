import SwitchesActionTypes from './switches.types';

export const toggleRecordingOnOff = () => ({
    type: SwitchesActionTypes.TOGGLE_RECORDING_ON_OFF
});

export const toggleHqOnOff = () => ({
    type: SwitchesActionTypes.TOGGLE_HQ_ON_OFF
});