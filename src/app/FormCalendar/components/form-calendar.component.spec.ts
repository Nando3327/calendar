import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {FormCalendarComponent} from './form-calendar.component';
import {FormsModule} from '@angular/forms';
import {CalendarService} from '../../Calendar/calendar.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FormCalendarComponent', () => {
  let component: FormCalendarComponent;
  let fixture: ComponentFixture<FormCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [FormCalendarComponent],
      providers: [CalendarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should response an DateModel with the pass data from component', fakeAsync(() => {
    tick(500);
    fixture.detectChanges();
    spyOn(component, 'saveAction').and.callThrough();
    component.monthCalendar = 2;
    component.dayCalendar = 3;
    component.desc = 'Test';
    component.color = '#27ff1d';
    component.city = 3652462;
    component.initTime = '03:00';
    component.endTime = '04:00';
    const response = component.saveAction();
    const city = component.cities.find(c => {
      return component.city === c.id || component.city === c.id.toString();
    });
    expect(response).toEqual({
      year: 2020,
      month: component.monthCalendar,
      day: component.dayCalendar,
      desc: component.desc,
      color: component.color,
      city: city.id,
      cityName: city.name,
      initialHour: component.initTime,
      finalHour: component.endTime,
      weather: '01d'
    });
  }));

  it('should return true if emit a new reminder to calendar-component', fakeAsync(() => {
    tick(500);
    fixture.detectChanges();
    spyOn(component, 'saveCalendarEvent').and.callThrough();
    component.monthCalendar = 2;
    component.dayCalendar = 3;
    component.desc = 'Test';
    component.color = '#27ff1d';
    component.city = 3652462;
    component.initTime = '03:00';
    component.endTime = '04:00';
    component.mode = 'add';
    const city = component.cities.find(c => {
      return component.city === c.id || component.city === c.id.toString();
    });
    const response = component.saveCalendarEvent({
      year: 2020,
      month: component.monthCalendar,
      day: component.dayCalendar,
      desc: component.desc,
      color: component.color,
      city: city.id,
      cityName: city.name,
      initialHour: component.initTime,
      finalHour: component.endTime,
      weather: '01d'
    }, component.mode);
    expect(response).toEqual(true);
  }));
});
