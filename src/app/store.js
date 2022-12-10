import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import settingReducer from '../redux/setting/settingSlice';

export const store = configureStore({
    reducer: {
        setting: settingReducer,
    }
});

setupListeners(store.dispatch);