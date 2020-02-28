import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-calendar',
  templateUrl: 'row-calendar.component.html'
})
export class RowCalendarComponent implements OnInit {

  @Input() events;
  @Input() options;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteAll(): void {
    if (this.options.action) {
      this.options.action('deleteAll', this.events);
    }
  }
}
