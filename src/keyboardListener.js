import store from './store';
import { addMessage } from './actions';
import { GAME_KEYS } from './constants/GameKeys';

function handleKeyDown(event) {
  const state = store.getState();
  const code = event.keyCode;
  if (!state.showOptions &&
      state.connected &&
      state.user.name &&
      document.activeElement === document.body &&
      GAME_KEYS[code]) {
        event.preventDefault();
        store.dispatch(addMessage(state.user, GAME_KEYS[code]));
      }
}

document.addEventListener('keydown', handleKeyDown);
