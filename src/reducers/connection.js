import { SOCKET_CONNECTED, SOCKET_DISCONNECTED } from '../constants/ActionTypes';

const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SOCKET_CONNECTED:
      return true;
    case SOCKET_DISCONNECTED:
      return false;
    default:
      return state;
  }
}
