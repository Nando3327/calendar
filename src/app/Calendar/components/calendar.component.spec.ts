import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {CalendarComponent} from './calendar.component';
import {FormsModule} from '@angular/forms';
import {CalendarService} from '../../Calendar/calendar.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormCalendarModule} from '../../FormCalendar/form-calendar.module';
import {RowCalendarModule} from '../../RowCalendar/row-calendar.module';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, FormCalendarModule, RowCalendarModule],
      declarations: [CalendarComponent],
      providers: [CalendarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    component.options = {
      currentMonth: 1,
      currentDay: 29,
      currentWeekDay: 5,
      dayMonthNumbers: 29
    };
    fixture.detectChanges();
  });

  it('should create a new reminder', () => {
    fixture.detectChanges();
    spyOn(component, 'returnToCalendar').and.callThrough();
    const mockInitialSize = component.mock.length;
    component.returnToCalendar({
      action: 'save',
      mode: 'add',
      data: {
        year: 2020,
        month: 3,
        day: 15,
        desc: 'Unit Test to add',
        color: '#27ff1d',
        city: 3652462,
        cityName: 'Quito',
        initialHour: '05:07',
        finalHour: '05:08',
        weather: '01d'
      }
    });
    expect(mockInitialSize + 1).toEqual(component.mock.length);
  });
});
