import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpWrapperService) {}

  public url =
    'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=';
  public key = 'da8ec0715416a2578980944cb0ce8b74';
  public location = {
    lat: '57.048',
    lon: '9.9187',
  };

  public getWeather() {
    const url = this.url
      .replace('{lat}', this.location.lat)
      .replace('{lon}', this.location.lon);

    return this.http.get(
      'https://openweathermap.org/data/2.5/weather?id=2624886&appid=439d4b804bc8187953eb36d2a8c26a02'
    );
  }
}
