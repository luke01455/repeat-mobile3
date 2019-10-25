import AccountModalActionTypes from './account-modal.types';

export const toggleModalOff = () => ({
    type: AccountModalActionTypes.TOGGLE_MODAL_OFF
});

export const toggleModalAccount = () => ({
    type: AccountModalActionTypes.TOGGLE_MODAL_ACCOUNT
});

export const toggleModalPremium = () => ({
    type: AccountModalActionTypes.TOGGLE_MODAL_PREMIUM
});