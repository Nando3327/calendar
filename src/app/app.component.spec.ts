import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CalendarModule} from './Calendar/calendar.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
