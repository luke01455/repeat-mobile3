import { createSelector } from 'reselect';

const selectAccountModal = state => state.AccountModal;

export const selectSideMenuHidden = createSelector(
    [selectAccountModal],
    user => user.hidden
)