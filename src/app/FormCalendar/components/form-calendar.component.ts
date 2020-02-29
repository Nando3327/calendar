import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DateModel} from '../../Models/Date.model';
import {CalendarService} from '../../Calendar/calendar.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form-calendar',
  templateUrl: 'form-calendar.component.html'
})
export class FormCalendarComponent implements OnInit, OnDestroy {

  @Input() options;
  @Output() returnActionEmiter = new EventEmitter();

  private subscriptions: Subscription[] = [];
  mode: string;
  initTime: string;
  endTime: string;
  desc: string;
  city: number;
  color: string;
  id: number;
  dayCalendar: number;
  monthCalendar: number;
  initTimeRequired = false;
  endTimeRequired = false;
  descriptionRequired = false;
  cityRequired = false;
  colorRequired = false;
  invalidRate = false;
  cities: Array<any>;

  constructor(private calendarService: CalendarService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.cities = this.calendarService.getCities();
    this.subscriptions.push(this.calendarService.clickEvent$.subscribe(data => {
      this.mode = data.mode;
      this.dayCalendar = data.item.day;
      this.monthCalendar = data.item.month;
      if (data.mode === 'edit') {
        this.initTime = data.item.initialHour;
        this.endTime = data.item.finalHour;
        this.desc = data.item.desc;
        this.city = this.cities.find(c => {
          return c.id === data.item.city || c.id === data.item.city.toString();
        }).id;
        this.color = data.item.color;
        this.id = data.item.id;
        this.showValidations();
      }
      this.ref.detectChanges();
    }));
    this.color = '#ff0000';
  }

  returnAction(): void {
    this.returnActionEmiter.emit({
      action: 'return',
      mode: '',
      data: {}
    });
  }

  validadFields(): boolean {
    let ret = true;
    if (this.isNullEmpty(this.desc) || this.isNullEmpty(this.initTime)
      || this.isNullEmpty(this.endTime) || this.isNullEmpty(this.color)
      || this.invalidRate > this.endTimeRequired
    ) {
      ret = false;
    }
    this.showValidations();
    this.ref.detectChanges();
    return ret;
  }

  showValidations() {
    this.initTimeRequired = this.isNullEmpty(this.initTime);
    this.endTimeRequired = this.isNullEmpty(this.endTime);
    this.descriptionRequired = this.isNullEmpty(this.desc);
    this.cityRequired = this.isNullEmpty(this.city);
    this.colorRequired = this.isNullEmpty(this.color);
    this.invalidRate = (this.initTime > this.endTime);
  }

  saveAction(): void {
    if (!this.validadFields()) {
      return;
    }
    const city = this.cities.find(c => {
      return this.city === c.id || this.city === c.id.toString();
    });
    const saveObject: DateModel = {
      year: 2020,
      month: this.monthCalendar,
      day: this.dayCalendar,
      desc: this.desc,
      color: this.color,
      city: city.id,
      cityName: city.name,
      initialHour: this.initTime,
      finalHour: this.endTime,
      weather: '01d'
    };
    this.calendarService.getWeather(city).subscribe(res => {
      saveObject.weather = res.weather[0].icon;
      this.saveCalendarEvent(saveObject, this.mode);
    }, error => {
      console.log(error);
      this.saveCalendarEvent(saveObject, this.mode);
    });
  }

  saveCalendarEvent(saveObject, mode): void {
    if (this.mode === 'edit') {
      saveObject.id = this.id;
    }
    this.returnActionEmiter.emit({
      action: 'save',
      mode: mode,
      data: saveObject
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  isNullEmpty(val): boolean {
    return (val === '' || val === undefined || val === null);
  }
}
