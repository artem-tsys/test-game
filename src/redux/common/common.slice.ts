import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { InitialState, IOption } from "src/redux/common/common.interfaces";
import fetchConfig from "src/redux/common/common.thinks";

/* eslint-disable no-param-reassign */

export const optionsAdapter = createEntityAdapter<IOption>()

export const commonSlice = createSlice({
  name: 'common',
  initialState: optionsAdapter.getInitialState<InitialState>({
	  loadingStatus: 'idle',
	  error: null,
	  questionNumber: 1,
	  countQuestions: 0,
	  prices: {},
	  questions: [],
  }),
  reducers: {
    NEXT_QUESTION: (state) => {
      state.questionNumber += 1;
    },
  },
	extraReducers: (builder) => {
		builder
			.addCase(fetchConfig.pending, (state) => {
				state.loadingStatus = 'pending'
				state.error = null
			})
			.addCase(fetchConfig.fulfilled, (state, {payload}) => {
				optionsAdapter.setAll(state, payload.options)
				state.loadingStatus = 'completed';
				state.error = null;
				state.prices = payload.config.prices;
				state.countQuestions = payload.config.countQuestions;
				state.questions = payload.questions;
			})
			.addCase(fetchConfig.rejected, (state, action) => {
				state.loadingStatus = 'failed'
				state.error = action.error.message ?? 'error'
			})
	},
});

export const {NEXT_QUESTION} = commonSlice.actions;
