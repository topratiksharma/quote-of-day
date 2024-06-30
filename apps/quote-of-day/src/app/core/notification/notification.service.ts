import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notification$ = new BehaviorSubject<string>(
    'Add Quote of the day or fuck of..'
  );
  public bc = new BroadcastChannel('quote-queue');
  constructor() {
    this.receiveNotification();
  }

  public sendNotification(message: string) {
    this.bc.postMessage(message); /* send */
  }

  public receiveNotification() {
    this.bc.onmessage = (ev: any) => {
      this.notification$.next(ev.data);
    };
  }
}
