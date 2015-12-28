import { CHANGE_USER_NAME, CHANGE_USER_COLOR } from '../constants/ActionTypes';

const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_NAME:
      localStorage.setItem('name', action.name);
      return Object.assign({}, state, {
        name: action.name,
      });
    case CHANGE_USER_COLOR:
      localStorage.setItem('color', action.color);
      return Object.assign({}, state, {
        color: action.color
      });
    default:
      return state;
  }
}
