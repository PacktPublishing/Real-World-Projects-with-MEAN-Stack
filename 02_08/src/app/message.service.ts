import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  _chats = [];
  _chatssub;
  socket;
  constructor() {
    this._chatssub = new Subject<any[]>();
    this.socket = io.connect();
    this.socket.on('connect', () => {
      console.log('connected to the server');
    });
    this.socket.on('message recieved', (data) => {
      this._chats.push(data);
      this._chatssub.next([...this._chats]);
    });
    this.socket.on('all messages', (data) => {
      this._chats = [...data];
      this._chatssub.next([...this._chats]);
    });
    this.socket.on('user connected', (data) => {
      this._chats.push({message: `${data} connected`, type: 'notify'});
      this._chatssub.next([...this._chats]);
    });
    this.socket.on('user disconnected', (data) => {
      this._chats.push({message: `${data} disconnected`, type: 'notify'});
      this._chatssub.next([...this._chats]);
    });
  }
  addChat(message) {
    this.socket.emit('new message', message);
  }
  addUser(user) {
    this.socket.emit('new user', user);
  }
  getChats() {
    return this._chatssub.asObservable();
  }
}
