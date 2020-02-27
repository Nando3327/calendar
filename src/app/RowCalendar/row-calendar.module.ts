import {NgModule} from '@angular/core';
import {ROW_CALENDAR_COMPONENTS} from './components';
import {ItemCalendarModule} from '../ItemCalendar/item-calendar.module';

@NgModule({
  imports: [ItemCalendarModule],
  declarations: [...ROW_CALENDAR_COMPONENTS],
  exports: [...ROW_CALENDAR_COMPONENTS]
})
export class RowCalendarModule {
}
