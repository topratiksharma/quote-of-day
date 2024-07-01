import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../core/weather/weather.service';
import { NotificationService } from '../../core/notification/notification.service';
import { ClockService } from '../../core/clock/clock.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private weather: WeatherService,
    public listener: NotificationService,
    public clock: ClockService
  ) {}
  public weatherDetails!: any;
  public quote = '';

  public ngOnInit(): void {
    setInterval(()=> {
      this.getWeather();
    },1000);
    this.quoteListener();
  }

  public getWeather() {
    this.weather.getWeather().subscribe((weather: any) => {
      this.weatherDetails = weather;
    });
  }

  private quoteListener() {
    this.listener.notification$.subscribe((message: any) => {
      this.quote = message;
    });
  }
}
