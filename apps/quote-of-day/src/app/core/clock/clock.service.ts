import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  public clock$ = new BehaviorSubject('');

  constructor() {
    this.updateClock(); // Initialize clock immediately
    setInterval(this.updateClock, 1000); // Update the clock every second
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    let timeString = '';
    let displayHours = hours % 12 || 12; // Convert hours to 12-hour format, using 12 for 0.

    if (!this.numberToWords) return;

    // Determine the time string based on the minutes
    if (minutes === 0) {
      timeString = `${this.numberToWords(displayHours)} o'clock`;
    } else if (minutes === 30) {
      timeString = `half past ${this.numberToWords(displayHours)}`;
    } else if (minutes < 30) {
      timeString = `${this.numberToWords(minutes)} past ${this.numberToWords(
        displayHours
      )}`;
    } else {
      displayHours = (displayHours % 12) + 1; // Adjust hour display for times beyond the half hour
      timeString = `${this.numberToWords(60 - minutes)} to ${this.numberToWords(
        displayHours
      )}`;
    }

    // Add timezone information
    const timeZone = now
      .toLocaleTimeString('en-us', { timeZoneName: 'short' })
      .split(' ')[2];
    timeString += ' ';

    // Capitalize and bold last two words
    const words = timeString.toUpperCase().split(' ');
    const lastTwoWords = words.slice(-2).join(' '); // Get last two words for bold
    const restOfWords = words.slice(0, -2).join(' '); // The rest of the time string

    // Update the clock display
    this.clock$.next(
      `${restOfWords} <span class="bolder">${lastTwoWords}</span>`
    );
  }

  private numberToWords(number: number) {
    const words = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'twenty-one',
      'twenty-two',
      'twenty-three',
      'twenty-four',
      'twenty-five',
      'twenty-six',
      'twenty-seven',
      'twenty-eight',
      'twenty-nine',
      'thirty',
    ];
    return words[number];
  }
}
