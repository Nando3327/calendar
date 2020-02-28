import { Injectable, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class CalendarService implements OnInit {

  clickEvent$: Subject<any> = new Subject();
  constructor() {
  }

  ngOnInit(): void {
  }

  loadData(item, mode): void {
    this.clickEvent$.next({item: item, mode: mode});
  }
}
