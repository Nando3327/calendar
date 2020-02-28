import {NgModule} from '@angular/core';
import {CALENDAR_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [...CALENDAR_COMPONENTS],
  exports: [...CALENDAR_COMPONENTS]
})
export class ItemCalendarModule {
}
