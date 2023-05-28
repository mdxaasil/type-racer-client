import io from 'socket.io-client';
const socket = io('http://localhost:3001');
// const socket = io('https://localhost:3001', { transports : ['websocket'] });
export default socket