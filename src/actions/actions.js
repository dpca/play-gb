import {
  ADD_MESSAGE,
  REMOTE_MESSAGE,
  CHANGE_USER,
  FRAME_UPDATE
} from '../constants/ActionTypes';

export function addMessage(user, message) {
  return { type: ADD_MESSAGE, user, message };
}

export function remoteMessage(user, message) {
  return { type: REMOTE_MESSAGE, user, message };
}

export function changeUser(name, color) {
  return { type: CHANGE_USER, name, color };
}

export function frameUpdate(frame) {
  return { type: FRAME_UPDATE, frame };
}
