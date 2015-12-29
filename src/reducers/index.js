import { combineReducers } from 'redux';
import messages from './messages';
import user from './user';
import game from './game';
import showOptions from './showOptions';
import connected from './connection';
import playerCount from './playerCount';

const rootReducer = combineReducers({ messages, user, game, showOptions, connected, playerCount });

export default rootReducer;
