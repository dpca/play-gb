import _ from 'lodash';
import { ADD_MESSAGE, REMOTE_MESSAGE } from '../constants/ActionTypes';
import socket from '../socket';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      socket.emit('message', action.user, action.message);
      return [{ user: action.user, message: action.message }].concat(_.take(state, 17));
    case REMOTE_MESSAGE:
      return [{ user: action.user, message: action.message }].concat(_.take(state, 17));
    default:
      return state;
  }
}
