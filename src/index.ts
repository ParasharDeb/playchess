import { WebSocketServer } from 'ws';
import { GameManager } from './gameManager';

const wss = new WebSocketServer({ port: 8080 });
const manager = new GameManager();

wss.on('connection', function connection(ws) {
    manager.addUser(ws);
    ws.on('close', () => manager.removeUser(ws));
});