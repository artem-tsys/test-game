interface Modal {
  name: string | null;
  data: Record<string, any> | null;
}

export interface InitialState {
  currentModal: Modal;
  reserveModal: Modal[];
}
