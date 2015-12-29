import { PLAYER_COUNT_UPDATE } from '../constants/ActionTypes';

const initialState = 0;

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PLAYER_COUNT_UPDATE:
      return action.count;
    default:
      return state;
  }
}
