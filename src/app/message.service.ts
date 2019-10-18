import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  public messages:String[];

  clear(){
    this.messages=[];
  }

  addMessage(message){
    this.messages.push(message);
  }

}
