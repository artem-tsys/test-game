import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './modal.intefaces';

/* eslint-disable no-param-reassign */

const initialState: InitialState = {
  currentModal: {
    name: null,
    data: null,
  },
  reserveModal: [],
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    SHOW_MODAL: (state, action) => {
      const {name, data} = action.payload;
      if (state.currentModal.name) {
        state.reserveModal = [...state.reserveModal, action.payload];
      } else {
        state.currentModal = {name, data};
      }
    },
    HIDE_MODAL: state => {
      if (state.reserveModal.length > 0) {
        state.currentModal = state.reserveModal.shift()!;
      } else {
        state.currentModal = {name: null, data: null};
      }
    },
  },
});

export const {SHOW_MODAL, HIDE_MODAL} = modalSlice.actions;
