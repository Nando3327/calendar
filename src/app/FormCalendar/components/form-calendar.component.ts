import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DateModel} from '../../Models/Date.model';
import {CalendarService} from '../../Calendar/calendar.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form-calendar',
  templateUrl: 'form-calendar.component.html'
})
export class FormCalendarComponent implements OnInit, OnDestroy {

  @Input() options;
  @Output() returnActionEmiter = new EventEmitter();

  private subscriptions: Subscription[] = [];
  mode: string;

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.calendarService.clickEvent$.subscribe(data => {
      this.mode = data.mode;
    }));
  }

  returnAction(): void {
    this.returnActionEmiter.emit({
      action: 'return',
      mode: '',
      data: {}
    });
  }

  saveAction(): void {
    const item: DateModel = {
      year: 2020,
      month: 4,
      day: 13,
      desc: 'Agregado',
      color: 'green',
      city: 'Quito',
      initialHour: '18:00',
      finalHour: '18:30'
    };
    this.returnActionEmiter.emit({
      action: 'save',
      mode: this.mode,
      data: item
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
