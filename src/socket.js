import io from 'socket.io-client';
import store from './store';
import * as Actions from './actions';

const socket = io('localhost:8090');

socket.on('connect', () => {
  console.log('Connected');
  store.dispatch(Actions.socketConnected());
});

socket.on('disconnect', () => {
  console.log('Connected');
  store.dispatch(Actions.socketDisconnected());
});

socket.on('remote message', (user, message) => {
  console.log('Message from ' + user.name + ': ' + message);
  store.dispatch(Actions.remoteMessage(user, message));
});

socket.on('frame', (frame) => {
  console.log('Frame received');
  store.dispatch(Actions.frameUpdate(frame));
});

export default socket;
