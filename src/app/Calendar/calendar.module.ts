import {NgModule} from '@angular/core';
import {CALENDAR_COMPONENTS} from './components';
import {RowCalendarModule} from '../RowCalendar/row-calendar.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [RowCalendarModule,
    CommonModule,
    FormsModule],
  declarations: [...CALENDAR_COMPONENTS],
  exports: [...CALENDAR_COMPONENTS]
})
export class CalendarModule {
}
