import {ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CalendarService} from '../calendar.service';

const mock = [{
  id: 1,
  year: 2020,
  month: 1,
  day: 29,
  color: '#ff0000',
  initialHour: '06:00',
  finalHour: '20:00',
  city: 3652462,
  cityName: 'Quito',
  desc: 'ejemplo de prueba',
  weather: '10d'
}, {
  id: 8,
  year: 2020,
  month: 1,
  day: 29,
  color: '#3960ff',
  initialHour: '01:00',
  finalHour: '14:00',
  city: 3652462,
  cityName: 'Quito',
  desc: 'ejemplo de prueba',
  weather: '10d'
}, {
  id: 3,
  year: 2020,
  month: 1,
  day: 29,
  color: '#3960ff',
  initialHour: '12:00',
  finalHour: '14:00',
  city: 3652462,
  cityName: 'Quito',
  desc: 'ejemplo de prueba',
  weather: '09d'
}, {
  id: 6,
  year: 2020,
  month: 3,
  day: 30,
  color: '#ff0000',
  initialHour: '12:00',
  finalHour: '14:00',
  city: 3652462,
  cityName: 'Quito',
  desc: 'ejemplo de prueba',
  weather: '03d'
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
  mock: Array<any>;

  constructor(private sanitizer: DomSanitizer,
              private ngZone: NgZone,
              private ref: ChangeDetectorRef,
              private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    this.mock = mock;
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
      returnData = returnData + '<div style="width: 14% !important;"><label style="font-size: 9px !important;">' + d + '</label></div>';
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
      this.htmlCalendar = this.htmlCalendar + '<div class="row" style="margin: 0% !important;">';
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
      this.htmlCalendar = '<div class="row" style="margin: 0% !important;">' + this.htmlCalendar;
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
      this.htmlCalendar = '<div class="row" style="margin: 0% !important;">' + this.htmlCalendar;
      this.htmlCalendar = '</div>' + this.htmlCalendar;
      id = 6;
    }
    this.addDaysBack(day, id, maxDay);
  }

  getItems(day): Array<any> {
    const ret = this.mock.filter(x => {
      return x.day === day && x.month === this.selectedMonthId;
    });
    return ret.sort(function (a, b) {
      return a.initialHour.localeCompare(b.initialHour);
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
          '<span class="badge" style="color:' + d.color + '; font-size: 10px;"><i class="fa fa-clock-o"></i></span>' +
          '<span style="font-size: 10px;"> ' + d.initialHour + ' </span>' +
          '<span style="font-size: 10px;"> ' + d.finalHour + ' </span><br>';
      });
      return '<button class="btn btn-lg" style="width: 100% !important; height: 100% !important;"'
        + disabled + ' onclick="namecaller(' + options.day + ')">' +
        '<span style="font-size: 10px;">' + options.day + '</span><br>' + retData + '</button>';
    } else {
      return '<button class="btn btn-lg" style="width: 100% !important; height: 100% !important;"'
        + disabled + ' onclick="namecaller(' + options.day + ')">' +
        '<span style="font-size: 10px;">' + options.day + '</span>' +
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
    setTimeout(() => {
      this.calendarService.loadData({
        month: this.selectedMonthId,
        day: item
      }, 'add');
    }, 400);
  }

  actionEvent(mode, item): void {
    switch (mode) {
      case 'edit':
        this.calendarService.loadData(item, mode);
        break;
      case 'delete':
        this.deleteReminder(item.id);
        this.renderCalendar();
        break;
      case 'deleteAll':
        item.forEach(i => {
          this.deleteReminder(i.id);
        });
        this.renderCalendar();
        break;
    }
  }

  deleteReminder(id): void {
    const indexToRemove = this.mock.findIndex(x => {
      return x.id === id;
    });
    this.mock.splice(indexToRemove, 1);
  }

  renderCalendar(): void {
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

  returnToCalendar(event): void {
    if (event && event.action && event.action === 'save') {
      switch (event.mode) {
        case 'add':
          const sorted = this.mock.sort(function (a, b) {
            return a.id - b.id;
          });
          event.data.id = sorted[this.mock.length - 1].id + 1;
          break;
        case 'edit':
          const indexToRemove = this.mock.findIndex(x => {
            return x.id === event.data.id;
          });
          this.mock.splice(indexToRemove, 1);
          break;
      }
      this.mock.push(event.data);
    }
    this.renderCalendar();
    this.ref.detectChanges();
  }
}
