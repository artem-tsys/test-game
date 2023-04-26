export interface InitialState {
	loadingStatus: 'idle' | 'pending' | 'completed' | 'failed'
	error: string | null
	questionNumber: number,
	prices: IPrices,
	questions: IQuestion[],
	countQuestions: number
}

type IPrices = Record<string, string>

interface IQuestion {
	title: string,
	answer: string[],
	options: string[]
	complexity: number
}

export interface IOption {
	id: string,
	text: string
}
