import { CHANGE_USER } from '../constants/ActionTypes';

const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      localStorage.setItem('name', action.name);
      localStorage.setItem('color', action.color);
      return {
        name: action.name,
        color: action.color
      };
    default:
      return state;
  }
}
