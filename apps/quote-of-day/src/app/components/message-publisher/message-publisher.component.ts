import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../core/notification/notification.service';

@Component({
  selector: 'app-message-publisher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-publisher.component.html',
  styleUrl: './message-publisher.component.scss',
})
export class MessagePublisherComponent {
  constructor(private notify: NotificationService) {}

  time = new Date().toTimeString();

  public quotes: Quote[] = [
    // {
    //   text: 'Therefore, to him who knows to do good and does not do it, to him it is sin.',
    //   type: MessageType.IN,
    // },
    // {
    //   text: 'James 4.17.',
    //   type: MessageType.OUT,
    // },
  ];

  public quote = '';

  public submit() {
    if (!this.quote) return;
    this.quotes.push({ text: this.quote, type: MessageType.OUT });
    this.notify.sendNotification(this.quote);
    this.quote = '';
  }
}

export interface Quote {
  text: string;
  type: MessageType;
}

export enum MessageType {
  IN = 'in',
  OUT = 'out',
}
