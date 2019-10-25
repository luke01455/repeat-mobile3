import AccountModalActionTypes from './account-modal.types';

const INITIAL_STATE = {
    type: 'off'
};

const sideMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AccountModalActionTypes.TOGGLE_MODAL_OFF:
            return {
                ...state,
                type: 'off'
            }
        case AccountModalActionTypes.TOGGLE_MODAL_ACCOUNT:
            return {
                ...state,
                type: 'account'
            }
        case AccountModalActionTypes.TOGGLE_MODAL_PREMIUM:
            return {
                ...state,
                type: 'premium'
            }
        default:
            return state;
    }
}

export default sideMenuReducer;