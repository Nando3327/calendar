import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit {

  @Input() options: any;
  calendarMatrix: any;
  htmlCalendar = '';
  showCalendar = false;

  constructor() {
  }

  ngOnInit(): void {
    this.calendarMatrix = [{
      id: 0,
      name: 'sunday',
      days: []
    }, {
      id: 1,
      name: 'monday',
      days: []
    }, {
      id: 2,
      name: 'tuesday',
      days: []
    }, {
      id: 3,
      name: 'wednesday',
      days: []
    }, {
      id: 4,
      name: 'thursday',
      days: []
    }, {
      id: 5,
      name: 'friday',
      days: []
    }, {
      id: 6,
      name: 'saturday',
      days: []
    }];
    this.addDaysFoward(this.options.currentDay, this.options.currentWeekDay, this.options.dayMonthNumbers);
    this.addDaysBack(this.options.currentDay, this.options.currentWeekDay, 1);
    document.getElementById('dataReceipt').innerHTML = this.htmlCalendar;
  }

  addDaysFoward(day, id, maxDay): void {
    if (day > maxDay) {
      if (id > 0) {
        let num = 1;
        for (let i = id; i <= 6; i++) {
          this.htmlCalendar = this.htmlCalendar + '<div class="col-sm-1">' + num + '<app-row-calendar></app-row-calendar></div>';
          num++;
        }
      }
      this.htmlCalendar = this.htmlCalendar + '</div>';
      return;
    }
    const valueToAddCalendar = this.calendarMatrix.find(x => {
      return x.id === id;
    });
    if (valueToAddCalendar.days.indexOf(day) === -1) {
      valueToAddCalendar.days.push(day);
      this.htmlCalendar = this.htmlCalendar + '<div class="col-sm-1">' + day + '<app-row-calendar></app-row-calendar></div>';
    }
    day++;
    id++;
    if (id > 6) {
      this.htmlCalendar = this.htmlCalendar + '</div>';
      this.htmlCalendar = this.htmlCalendar + '<div class="row">';
      id = 0;
    }
    this.addDaysFoward(day, id, maxDay);
  }

  addDaysBack(day, id, maxDay): void {
    if (day < maxDay) {
      if (id < 6) {
        let num = 31;
        for (let i = id; i >= 0; i--) {
          this.htmlCalendar = '<div class="col-sm-1">' + num + '<app-row-calendar></app-row-calendar></div>' + this.htmlCalendar;
          num--;
        }
      }
      this.htmlCalendar = '<div class="row">' + this.htmlCalendar;
      return;
    }
    const valueToAddCalendar = this.calendarMatrix.find(x => {
      return x.id === id;
    });
    if (valueToAddCalendar.days.indexOf(day) === -1) {
      valueToAddCalendar.days.push(day);
      this.htmlCalendar = '<div class="col-sm-1">' + day + '<app-row-calendar></app-row-calendar></div>' + this.htmlCalendar;
    }
    day--;
    id--;
    if (id < 0) {
      this.htmlCalendar = '<div class="row">' + this.htmlCalendar;
      this.htmlCalendar = '</div>' + this.htmlCalendar;
      id = 6;
    }
    this.addDaysBack(day, id, maxDay);
  }
}
