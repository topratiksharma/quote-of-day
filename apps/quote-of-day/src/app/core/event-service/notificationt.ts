import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notification$ = new BehaviorSubject<any>('');
  public bc = new BroadcastChannel('test_channel');
  constructor() {
    this.reciveNotication();
  }

  public sendNotification(message: string) {
    this.bc.postMessage(message); /* send */
  }

  public reciveNotication() {
    this.bc.onmessage = (ev: any) => {
      this.notification$.next(ev.data);
    };
  }
}
