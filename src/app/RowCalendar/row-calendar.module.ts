import {NgModule} from '@angular/core';
import {ROW_CALENDAR_COMPONENTS} from './components';
import {ItemCalendarModule} from '../ItemCalendar/item-calendar.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [ItemCalendarModule,
    CommonModule,
    FormsModule],
  declarations: [...ROW_CALENDAR_COMPONENTS],
  exports: [...ROW_CALENDAR_COMPONENTS]
})
export class RowCalendarModule {
}
