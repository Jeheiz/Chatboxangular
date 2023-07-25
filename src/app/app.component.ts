import { Component } from '@angular/core';

interface Message {
  user: string;
  bot: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMessage: string = '';
  messages: Message[] = [];

  sendMessage() {
    const message = this.userMessage.trim();
    if (message !== '') {
      this.messages.push({ user: message, bot: this.getRandomResponse() });
      this.userMessage = '';
    }
  }
  getRandomResponse(): string {
    const responses = ['Hola', '¿Cómo estás?', '¡Qué buen día!', 'No entiendo lo que dices', 'Gracias', 'Adiós'];
    const questions = ['¿Cuál es tu nombre?', '¿Qué te trae por aquí?', '¿Te gusta la música?', '¿Has asistido a eventos similares antes?'];
    const randomIndex = Math.floor(Math.random() * (responses.length + questions.length));
  
    if (randomIndex < responses.length) {
      return responses[randomIndex];
    } else {
      return questions[randomIndex - responses.length];
    }
  }
}