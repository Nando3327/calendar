import {Component} from '@angular/core';
import {LabelsService} from './labels/labels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar';
  labels: any;
  months: any;
  selectedMonth: string;
  showCalendar = false;
  calendarOptions: any;

  constructor(Labels: LabelsService) {
    this.labels = Labels.getLabels();
    this.months = [{
      id: 1,
      value: 'January'
    }, {
      id: 2,
      value: 'Febrary'
    }];
    this.selectedMonth = this.months[0].id;
  }

  drawCalendar(): void {
    const date = new Date();
    this.calendarOptions = {
      currentWeekDay: date.getDay(),
      currentDay: date.getDate(),
      dayMonthNumbers: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    };
    this.showCalendar = true;
  }
}
