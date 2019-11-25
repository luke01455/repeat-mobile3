import { createSelector } from 'reselect';

const selectSideMenu = state => state.sideMenu;

export const selectSideMenuHidden = createSelector(
    [selectSideMenu],
    user => user.hidden
)

