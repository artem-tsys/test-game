interface Modal {
	name: string | null;
	data: Record<string, any> | null;
}

export interface InitialState {
	modal: Modal;
	reserveModal: Modal[];
}
