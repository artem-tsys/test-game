import {IFetch} from '../../types/general';
import {AnswerStatus} from '../../types/options';

export interface InitialState extends IFetch {
  questionNumber: number;
  prices: IPrices;
  countQuestions: number;
  answerStatus: AnswerStatus;
}

type IPrices = Record<number, string>;
