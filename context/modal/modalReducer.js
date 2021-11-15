import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../components/modals/modalConstants';

export const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL.FOUNDERS_DAY:
      return {
        ...state,
        active: true,
        modalName: OPEN_MODAL.FOUNDERS_DAY,
        currentUser: action.user,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        active: false,
        modalName: '',
        currentUser: null,
      };
    default:
      return state;
  }
};
