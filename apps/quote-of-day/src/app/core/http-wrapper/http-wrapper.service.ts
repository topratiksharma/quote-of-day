import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {
  constructor(private http: HttpClient) {}

  public get(url: string, params?: string) {
    return this.http.get(url);
  }

  public post(url: string, params: string) {
    this.http.get(url);
  }
}
