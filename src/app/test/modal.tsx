import React, { createContext, useContext, useReducer } from 'react';

// 액션 타입 정의
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// 리듀서 함수
const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...action.payload, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

// 초기 상태
const initialModalState = {
  isOpen: false,
  title: '',
  content: '',
  onConfirm: null,
  onCancel: null,
};

// Context 생성
const ModalContext = createContext();

// Modal Provider 컴포넌트
export const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialModalState);

  const openModal = (modalConfig) => {
    dispatch({ type: OPEN_MODAL, payload: modalConfig });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 커스텀 훅
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};