import {RootState} from '../store';

export const modalNameSelector = (state: RootState) => state.modal.currentModal.name;
export const modalDataSelector = (state: RootState) => state.modal.currentModal.data;
