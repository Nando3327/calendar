import {NgModule} from '@angular/core';
import {FORM_CALENDAR_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    FormsModule],
  declarations: [...FORM_CALENDAR_COMPONENTS],
  exports: [...FORM_CALENDAR_COMPONENTS]
})
export class FormCalendarModule {
}
