import io from 'socket.io-client';
import store from './store';
import { remoteMessage, frameUpdate } from './actions/actions';

const socket = io('localhost:8090');
socket.on('remote message', (user, message) => {
  store.dispatch(remoteMessage(user, message));
});
socket.on('frame', (frame) => {
  store.dispatch(frameUpdate(frame));
});

export default socket;
