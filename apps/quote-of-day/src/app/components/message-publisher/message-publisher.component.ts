import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-publisher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-publisher.component.html',
  styleUrl: './message-publisher.component.scss',
})
export class MessagePublisherComponent {
  quotes = [
    {
      text: 'Therefore, to him who knows to do good and does not do it, to him it is sin.',
      type: 'in',
    },
    {
      text: 'James 4.17.',
      type: 'out',
    },
  ];

  submit() {
    alert('');
  }
}
