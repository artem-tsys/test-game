import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {fetchConfig} from '../common/common.thinks';
import {IOption} from './options.interfaces';

/* eslint-disable no-param-reassign */

export const optionsAdapter = createEntityAdapter<IOption>();

export const optionsSlice = createSlice({
  name: 'options',
  initialState: optionsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchConfig.fulfilled, (state, {payload}) => {
      optionsAdapter.setAll(state, payload.options);
    });
  },
});
