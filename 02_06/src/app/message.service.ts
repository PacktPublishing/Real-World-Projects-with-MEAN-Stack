import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  socket;
  constructor() {
    this.socket = io.connect();
    this.socket.on('connect', () => {
      console.log('connected to the server');
    });
    this.socket.on('message recieved', (data) => {
      console.log(data);
    });
  }
  addChat(message) {
    this.socket.emit('new message', message);
  }
  addUser(user) {
    this.socket.emit('add user', user);

  }
}
