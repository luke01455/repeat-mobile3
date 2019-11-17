import SwitchActionTypes from "./switches.types";

const INITIAL_STATE = {
  recordingOnOff: true,
  hqOnOff: true
};

const switchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SwitchActionTypes.TOGGLE_RECORDING_ON_OFF:
      return {
        ...state,
        recordingOnOff: !state.recordingOnOff
      };
    case SwitchActionTypes.TOGGLE_HQ_ON_OFF:
      return {
        ...state,
        hqOnOff: !state.hqOnOff
      };
    default:
      return state;
  }
};

export default switchesReducer;
