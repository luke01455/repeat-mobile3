import SideMenuActionTypes from './side-menu.types';

const INITIAL_STATE = {
    hidden: true
};

const sideMenuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SideMenuActionTypes.TOGGLE_SIDE_MENU_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case SideMenuActionTypes.TURN_SIDE_MENU_OFF:
            return {
                ...state,
                hidden: true
            }
        default:
            return state;
    }
}

export default sideMenuReducer;