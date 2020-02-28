import {AfterViewInit, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CalendarService} from '../calendar.service';

const mock = [{
  id: 1,
  year: 2020,
  month: 1,
  day: 28,
  color: 'red',
  initialHour: '12:00',
  finalHour: '14:00',
  city: 'Quito',
  desc: 'ejemplo de prueba'
}, {
  id: 2,
  year: 2020,
  month: 1,
  day: 28,
  color: 'blue',
  initialHour: '12:00',
  finalHour: '14:00',
  city: 'Quito',
  desc: 'ejemplo de prueba'
}, {
  id: 3,
  year: 2020,
  month: 2,
  day: 14,
  color: 'blue',
  initialHour: '12:00',
  finalHour: '14:00',
  city: 'Quito',
  desc: 'ejemplo de prueba'
}, {
  id: 4,
  year: 2020,
  month: 1,
  day: 2,
  color: 'red',
  initialHour: '12:00',
  finalHour: '14:00',
  city: 'Quito',
  desc: 'ejemplo de prueba'
}];

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit {

  @Input() options: any;
  calendarMatrix: any;
  htmlCalendar = '';
  selectedMonth: string;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'];
  selectedMonthId: number;
  showCalendar = true;
  showCalendarData = false;
  safeHtml: any;
  dataShow: any;
  rowCalendarOptions: any;

  constructor(private sanitizer: DomSanitizer,
              private ngZone: NgZone,
              public service: CalendarService,
              private ref: ChangeDetectorRef) {
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
    this.resetCalendar();
    this.selectedMonthId = this.options.currentMonth;
    this.addDaysFoward(this.options.currentDay, this.options.currentWeekDay, this.options.dayMonthNumbers);
    this.addDaysBack(this.options.currentDay, this.options.currentWeekDay, 1);
    this.drawDaysNames();
    this.getMonthName(this.options.currentMonth);
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
      this.htmlCalendar
    );
    this.showCalendarData = false;
    setTimeout(() => {
      const self = this;
      window['angularComponent'] = {runThisFunctionFromOutside: this.runThisFunctionFromOutside, zone: this.ngZone, self: self};
      this.showCalendarData = true;
    }, 200);
  }

  getMonthName(month): void {
    this.selectedMonth = this.monthNames[month];
  }

  prevMonth(): void {
    this.selectedMonthId--;
    this.drawCalendar();
  }

  nextMonth(): void {
    this.selectedMonthId++;
    this.drawCalendar();
  }

  drawCalendar(): void {
    this.getMonthName(this.selectedMonthId);
    this.resetCalendar();
    const date = new Date(2020, this.selectedMonthId, 1);
    const dateNext = new Date(2020, this.selectedMonthId + 1, 0);
    this.addDaysFoward(date.getDate(), date.getDay(), dateNext.getDate());
    this.addDaysBack(date.getDate(), date.getDay(), 1);
    this.drawDaysNames();
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
      this.htmlCalendar
    );
    this.showCalendarData = false;
    setTimeout(() => {
      this.showCalendarData = true;
    }, 200);
  }

  drawDaysNames(): void {
    let returnData = '<div class="row">';
    this.dayNames.forEach(d => {
      returnData = returnData + '<div style="width: 14% !important;"><label>' + d + '</label></div>';
    });
    returnData = returnData + '</div>';
    this.htmlCalendar = returnData + this.htmlCalendar;
  }

  drawBorders(): string {
    return '<div class="border" style="width: 14% !important;">';
  }

  addDaysFoward(day, id, maxDay): void {
    if (day > maxDay) {
      if (id > 0) {
        let num = 1;
        for (let i = id; i <= 6; i++) {
          const options = {
            day: num,
            disabled: true,
            showData: false
          };
          this.htmlCalendar = this.htmlCalendar + this.drawBorders() + this.drawDay(options) + '</div>';
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
      const options = {
        day: day,
        disabled: false,
        showData: true
      };
      this.htmlCalendar = this.htmlCalendar + this.drawBorders() + this.drawDay(options) + '</div>';
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
          const options = {
            day: num,
            disabled: true,
            showData: false
          };
          this.htmlCalendar = this.drawBorders() + this.drawDay(options) + '</div>' + this.htmlCalendar;
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
      const options = {
        day: day,
        disabled: false,
        showData: true
      };
      this.htmlCalendar = this.drawBorders() + this.drawDay(options) + '</div>' + this.htmlCalendar;
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

  getItems(day): Array<any> {
    return mock.filter(x => {
      return x.day === day && x.month === this.selectedMonthId;
    });
  }

  drawDay(options: any): string {
    const disabled = (options.disabled ||
      (this.selectedMonthId === this.options.currentMonth && options.day < this.options.currentDay)) ? 'disabled="disabled"' : '';
    const data = this.getItems(options.day);
    if (data !== undefined && options.showData) {
      let retData = '';
      data.forEach(d => {
        retData = retData +
          '<span class="badge" style="background-color:' + d.color + '; font-size: 10px;"><i class="fa fa-clock-o"></i></span>' +
          '<span style="font-size: 10px;"> ' + d.initialHour + ' </span>' +
          '<span style="font-size: 10px;"> ' + d.finalHour + ' </span><br>';
      });
      return '<button class="btn btn-lg"' + disabled + ' onclick="namecaller(' + options.day + ')">' +
        '<span>' + options.day + '</span><br>' + retData + '</button>';
    } else {
      return '<button class="btn btn-lg"' + disabled + ' onclick="namecaller(' + options.day + ')">' +
        '<span>' + options.day + '</span>' +
        '</button>';
    }
  }

  resetCalendar(): void {
    this.htmlCalendar = '';
    this.calendarMatrix.forEach(x => {
      x.days = [];
    });
  }

  showEvents(item): void {
    this.dataShow = this.getItems(item);
    this.rowCalendarOptions = {
      day: item,
      month: this.selectedMonthId + 1,
      year: 2020,
      action: this.actionEvent.bind(this)
    };
    this.showCalendar = false;
    this.ref.detectChanges();
  }

  actionEvent(mode, item): void {
    switch (mode) {
      case 'edit':

        break;
      case 'delete':
        const indexToRemove = mock.findIndex(x => {
          return x.id === item.id;
        });
        mock.splice(indexToRemove, 1);
        break;
    }
    this.drawCalendar();
    this.showCalendar = true;
    setTimeout(() => {
      const self = this;
      window['angularComponent'] = {runThisFunctionFromOutside: this.runThisFunctionFromOutside, zone: this.ngZone, self: self};
      this.showCalendarData = true;
      this.ref.detectChanges();
    }, 200);
  }

  runThisFunctionFromOutside(item) {
    this['self'].showEvents(item);
  }

  return(): void {
    this.showCalendar = true;
    this.ref.detectChanges();
  }
}
