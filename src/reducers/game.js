import { FRAME_UPDATE } from '../constants/ActionTypes';

const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FRAME_UPDATE:
      return action.frame;
    default:
      return state;
  }
}
