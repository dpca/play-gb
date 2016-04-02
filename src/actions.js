import {
  ADD_MESSAGE,
  REMOTE_MESSAGE,
  CHANGE_USER_NAME,
  CHANGE_USER_COLOR,
  FRAME_UPDATE,
  SHOW_OPTIONS,
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  PLAYER_COUNT_UPDATE,
  SHOW_KEYS
} from './constants/ActionTypes';

export function addMessage(user, message) {
  return { type: ADD_MESSAGE, user, message };
}

export function remoteMessage(user, message) {
  return { type: REMOTE_MESSAGE, user, message };
}

export function changeUserName(name) {
  return { type: CHANGE_USER_NAME, name };
}

export function changeUserColor(color) {
  return { type: CHANGE_USER_COLOR, color };
}

export function frameUpdate(frame) {
  return { type: FRAME_UPDATE, frame };
}

export function showOptions() {
  return { type: SHOW_OPTIONS };
}

export function socketConnected() {
  return { type: SOCKET_CONNECTED }
}

export function socketDisconnected() {
  return { type: SOCKET_DISCONNECTED }
}

export function playerCountUpdate(count) {
  return { type: PLAYER_COUNT_UPDATE, count }
}

export function showKeys() {
  return { type: SHOW_KEYS };
}
