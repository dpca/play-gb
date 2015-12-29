import _ from 'lodash';
import { createStore } from 'redux';
import uuid from 'node-uuid';
import reducer from './reducers/index';
import { COLORS } from './constants/Colors';

const initialState = {
  user: {
    uid: localStorage.getItem('uid') || uuid.v4(),
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
