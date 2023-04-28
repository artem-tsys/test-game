import {RootState} from '../store';
import {questionAdapter} from './question.slice';

export const questionSelectors = questionAdapter.getSelectors<RootState>(state => state.question);

export const questionSelector = state => {
  const questions = questionSelectors.selectAll(state);
  const {questionNumber} = state.common;

  return questions.find(question => question.complexity === questionNumber);
};

export const currentQuestionSelector = state => {
  const questions = questionSelectors.selectAll(state);
  const {questionId} = state.common;

  return questions.find(question => question.id === questionId);
};
