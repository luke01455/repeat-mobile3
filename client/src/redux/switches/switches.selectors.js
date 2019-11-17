import { createSelector } from 'reselect';

const selectSwitches = state => state.switches;

 export const selectHqLqState = createSelector(
     [selectSwitches],
     switches => switches.hqLq
 )

 export const selectOnOffState = createSelector(
    [selectSwitches],
    switches => switches.onOff
)
