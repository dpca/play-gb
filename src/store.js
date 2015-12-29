import _ from 'lodash';
import { createStore } from 'redux';
import uuid from 'node-uuid';
import reducer from './reducers/index';
import { COLORS } from './constants/Colors';

let uid = localStorage.getItem('uid');
if (!uid) {
  uid = uuid.v4();
  localStorage.setItem('uid', uid);
}

const initialState = {
  user: {
    uid: uid,
    name: localStorage.getItem('name') || '',
    color: localStorage.getItem('color') || _.sample(COLORS)
  },
  messages: [],
  game: '',
  showOptions: false,
  connected: false,
  playerCount: 0
};

const store = createStore(reducer, initialState);

export default store;
