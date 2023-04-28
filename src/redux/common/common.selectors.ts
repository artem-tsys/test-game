import {RootState} from '../store';

export const questionNumberSelector = (state: RootState) => state.common.questionNumber;
export const countQuestionsSelector = (state: RootState) => state.common.countQuestions;
export const pricesSelector = (state: RootState) => state.common.prices;
export const priceSelector = (state: RootState) => state.common.prices[questionNumberSelector(state)];

export const answerStatusSelector = (state: RootState) => state.common.answerStatus;
