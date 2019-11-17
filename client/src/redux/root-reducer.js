import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import sideMenuReducer from './side-menu/side-menu.reducer';
import accountModalReducer from './account-modal/account-modal.reducer';
import switchesReducer from './switches/switches.reducer';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    sideMenu: sideMenuReducer,
    accountModal: accountModalReducer,
    switches: switchesReducer
});

export default persistReducer(persistConfig, rootReducer);