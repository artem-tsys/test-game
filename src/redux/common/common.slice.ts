import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './common.interfaces';
import {fetchConfig} from './common.thinks';

/* eslint-disable no-param-reassign */
const initialState: InitialState = {
  loadingStatus: 'idle',
  error: null,
  answerStatus: 'inactive',
  questionNumber: 1,
  countQuestions: 0,
  prices: {},
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    NEXT_QUESTION: state => {
      state.questionNumber += 1;
      state.answerStatus = 'inactive';
    },
    SET_ANSWER_STATUS: (state, {payload}) => {
      state.answerStatus = payload;
    },
    RESET_GAME: state => {
      state.answerStatus = 'inactive';
      state.questionNumber = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchConfig.pending, state => {
        state.loadingStatus = 'pending';
        state.error = null;
      })
      .addCase(fetchConfig.fulfilled, (state, {payload}) => {
        state.loadingStatus = 'completed';
        state.error = null;
        state.prices = payload.config.prices;
        state.countQuestions = payload.config.countQuestions;
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error.message ?? 'error';
      });
  },
});

export const {NEXT_QUESTION, SET_ANSWER_STATUS, RESET_GAME} = commonSlice.actions;
