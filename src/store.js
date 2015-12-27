import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer, {
  user: {
    name: localStorage.getItem('name') || '',
    color: localStorage.getItem('color') || 'black'
  },
  messages: [],
  game: ''
});

export default store;
