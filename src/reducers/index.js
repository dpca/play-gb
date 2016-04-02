import { combineReducers } from 'redux';
import messages from './messages';
import user from './user';
import game from './game';
import showOptions from './showOptions';
import connected from './connection';
import playerCount from './playerCount';
import showKeys from './showKeys';

const rootReducer = combineReducers({
  messages,
  user,
  game,
  showOptions,
  connected,
  playerCount,
  showKeys
});

export default rootReducer;
