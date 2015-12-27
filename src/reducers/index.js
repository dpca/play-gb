import { combineReducers } from 'redux';
import messages from './messages';
import user from './user';
import game from './game';

const rootReducer = combineReducers({ messages, user, game });

export default rootReducer;
