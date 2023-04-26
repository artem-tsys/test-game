import {NEXT_QUESTION} from 'src/redux/common/common.slice';

export const commonMiddleware = store => next => async action => {
  const {getState} = store;

  next(action);
  switch (action.type) {
    case NEXT_QUESTION.type: {
      const state = getState();
      // eslint-disable-next-line no-console
      console.log(state);
			if(state.countQuestions >= action.payload) {
				store.push('/final')
			}
      break;
    }
  }
};
