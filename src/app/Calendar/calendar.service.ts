import { Injectable, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CalendarService implements OnInit {

  clickEvent$: Subject<any> = new Subject();
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  loadData(item, mode): void {
    this.clickEvent$.next({item: item, mode: mode});
  }

  getWeather(params): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&cnt=5&appid=f89b76ab38eecff2f27d04ea0ca46f19');
  }
}
