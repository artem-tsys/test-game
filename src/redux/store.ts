import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {commonMiddleware} from 'src/redux/common/common.middleware';
import {commonSlice} from 'src/redux/common/common.slice';
import { modalSlice } from "src/redux/modal/modal.slice";

export const createConfigureStore = (initState = {}) =>
  configureStore({
    reducer: {
      common: commonSlice.reducer,
      modal: modalSlice.reducer,
    },
    preloadedState: initState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([commonMiddleware]),
  });

export const store = createConfigureStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
