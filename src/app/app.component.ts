import {Component} from '@angular/core';
import {LabelsService} from './labels/labels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarOptions: any;

  constructor() {
    const date = new Date();
    this.calendarOptions = {
      currentWeekDay: date.getDay(),
      currentDay: date.getDate(),
      dayMonthNumbers: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      currentMonth: date.getMonth()
    };
  }
}
