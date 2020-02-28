import {NgModule} from '@angular/core';
import {CALENDAR_COMPONENTS} from './components';
import {RowCalendarModule} from '../RowCalendar/row-calendar.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CalendarService} from './calendar.service';

@NgModule({
  imports: [RowCalendarModule,
    CommonModule,
    FormsModule],
  declarations: [...CALENDAR_COMPONENTS],
  exports: [...CALENDAR_COMPONENTS],
  providers: [CalendarService]
})
export class CalendarModule {
}
