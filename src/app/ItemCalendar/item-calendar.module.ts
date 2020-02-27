import {NgModule} from '@angular/core';
import {CALENDAR_COMPONENTS} from './components';

@NgModule({
  imports: [],
  declarations: [...CALENDAR_COMPONENTS],
  exports: [...CALENDAR_COMPONENTS]
})
export class ItemCalendarModule {
}
