import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-calendar',
  templateUrl: 'item-calendar.component.html'
})
export class ItemCalendarComponent implements OnInit {

  @Input() item;
  @Input() options;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(): void {
    if (this.options.action) {
      this.options.action('edit', this.item);
    }
  }

  delete(): void {
    if (this.options.action) {
      this.options.action('delete', this.item);
    }
  }
}
