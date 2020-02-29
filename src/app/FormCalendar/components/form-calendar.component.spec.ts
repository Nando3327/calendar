import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalendarComponent } from './form-calendar.component';
import {FormsModule} from '@angular/forms';
import {CalendarService} from '../../Calendar/calendar.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FormCalendarComponent', () => {
  let component: FormCalendarComponent;
  let fixture: ComponentFixture<FormCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      declarations: [ FormCalendarComponent ],
      providers: [CalendarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const a = 'Hola Mundo';
    expect(a).toEqual('Hola Mundo');
  });
});
