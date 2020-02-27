import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalendarModule} from './Calendar/calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LabelsService} from './labels/labels.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
