import { SHOW_KEYS } from '../constants/ActionTypes';

const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_KEYS:
      return !state;
    default:
      return state;
  }
}
