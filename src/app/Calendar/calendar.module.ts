import {NgModule} from '@angular/core';
import {CALENDAR_COMPONENTS} from './components';
import {RowCalendarModule} from '../RowCalendar/row-calendar.module';

@NgModule({
  imports: [RowCalendarModule],
  declarations: [...CALENDAR_COMPONENTS],
  exports: [...CALENDAR_COMPONENTS]
})
export class CalendarModule {
}
