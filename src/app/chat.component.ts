import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: string[] = [];
  userMessage: string = '';

  sendMessage() {
    const message = this.userMessage.trim();
    if (message !== '') {
      this.messages.push(message);
      this.userMessage = '';
    }
  }
}