import {NgModule} from '@angular/core';
import {FORM_CALENDAR_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [...FORM_CALENDAR_COMPONENTS],
  exports: [...FORM_CALENDAR_COMPONENTS]
})
export class FormCalendarModule {
}
