import { SHOW_OPTIONS } from '../constants/ActionTypes';

const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_OPTIONS:
      return !state;
    default:
      return state;
  }
}
