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
        default:
            return state;
    }
}

export default sideMenuReducer;