import io from 'socket.io-client';
import store from './store';
import * as Actions from './actions';

const socketUri = process.env.SERVER_URI || 'localhost:8090';
const socket = io(socketUri);

socket.on('connect', () => {
  store.dispatch(Actions.socketConnected());
});

socket.on('disconnect', () => {
  store.dispatch(Actions.socketDisconnected());
});

socket.on('remote message', (user, message) => {
  store.dispatch(Actions.remoteMessage(user, message));
});

socket.on('frame', (frame) => {
  store.dispatch(Actions.frameUpdate(frame));
});

socket.on('player count', (count) => {
  store.dispatch(Actions.playerCountUpdate(count));
});

export default socket;
