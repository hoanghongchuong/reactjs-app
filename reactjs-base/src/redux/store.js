import { configureStore } from '@reduxjs/toolkit';
import appStateSlice  from '~/redux/features/appStateSlice';

export const store = configureStore({
    reducer: {
        appState: appStateSlice
    }
})
