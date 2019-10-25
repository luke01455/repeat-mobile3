import { createSelector } from 'reselect';

const selectAccountModal = state => state.accountModal;

export const selectAccountModalType = createSelector(
    [selectAccountModal],
    accountModal => accountModal.type
)