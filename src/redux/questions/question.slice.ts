import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {fetchConfig} from '../common/common.thinks';
import {IQuestion} from './question.interfaces';

/* eslint-disable no-param-reassign */

export const questionAdapter = createEntityAdapter<IQuestion>();

export const questionSlice = createSlice({
  name: 'question',
  initialState: questionAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchConfig.fulfilled, (state, {payload}) => {
      questionAdapter.setAll(state, payload.questions);
    });
  },
});
