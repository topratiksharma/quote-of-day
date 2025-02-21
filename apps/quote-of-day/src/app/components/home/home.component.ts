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
    }, 10000);
    this.quoteListener();
  }

  public getWeather() {
    this.weather.getWeather().subscribe((weather: any) => {
      this.weatherDetails = weather;
      this.weatherDetails.main.temp = Math.round(this.weatherDetails.main.temp);
    });
  }

  private quoteListener() {
    this.listener.notification$.subscribe((message: any) => {
      this.quote = message;
    });
  }
}
