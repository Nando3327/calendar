import {NgModule} from '@angular/core';
import {CALENDAR_COMPONENTS} from './components';
import {RowCalendarModule} from '../RowCalendar/row-calendar.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [RowCalendarModule,
    FormsModule],
  declarations: [...CALENDAR_COMPONENTS],
  exports: [...CALENDAR_COMPONENTS]
})
export class CalendarModule {
}
