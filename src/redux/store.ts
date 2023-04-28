import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {commonSlice} from './common/common.slice';
import {modalSlice} from './modal/modal.slice';
import {optionsSlice} from './options/options.slice';
import {questionSlice} from './questions/question.slice';

export const createConfigureStore = (initState = {}) =>
  configureStore({
    reducer: {
      common: commonSlice.reducer,
      question: questionSlice.reducer,
      options: optionsSlice.reducer,
      modal: modalSlice.reducer,
    },
    preloadedState: initState,
  });

export const store = createConfigureStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
