import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../core/weather/weather.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private weather: WeatherService) {}
  public weatherDetails: any = {};
  public quote = '';
  ngOnInit(): void {
    this.getWeather();
  }

  public getWeather() {
    this.weather.getWeather().subscribe((weather: any) => {
      this.weatherDetails = weather;
    });
  }
}
