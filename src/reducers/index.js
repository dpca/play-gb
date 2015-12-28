import { combineReducers } from 'redux';
import messages from './messages';
import user from './user';
import game from './game';
import showOptions from './showOptions';
import connected from './connection';

const rootReducer = combineReducers({ messages, user, game, showOptions, connected });

export default rootReducer;
