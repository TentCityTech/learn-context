import React, { useReducer, createContext } from 'react';
import { modalReducer } from './modalReducer';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../components/modals/modalConstants';

const initialState = {
  active: false,
  modalName: '',
  currentUser: null,
};

export const ModalContext = createContext();

export function ModalProvider(props) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openFoundersModal = (user) => {
    dispatch({
      type: OPEN_MODAL.FOUNDERS_DAY,
      currentUser: user,
      active: true,
    });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{ modalState: state, openFoundersModal, closeModal }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
