/* eslint-disable no-var */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  public clock$ = new BehaviorSubject('');

  constructor() {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    //date object
    const date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = 'AM';

    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = 'PM';
    }

    //small tag para los segundos y el pm/am
    const time = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:<small>${
      s < 10 ? '0' : ''
    }${s}|${session}</small>`;

    let text;

    if (h >= 5 && h <= 8 && session === 'AM') {
      text = `Good Morning`;
    } else if (h > 8 && h < 12 && session === 'AM') {
      text = `Good Day`;
    } else if (h >= 1 && h <= 5 && session === 'PM') {
      text = `Good Afternoon`;
    } else if (h <= 10 && session === 'PM') {
      text = `Good Evening`;
    } else {
      text = `Good Night`;
    }

    if (!this.clock$) return;

    this.clock$.next(`${text} ${time}`);
  }
}
